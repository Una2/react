import React,{Component}  from 'react';
import {connect} from 'react-redux';
var _ = require('lodash');
import NavLink from './NavLink';

class Carts extends Component{
    render(){
        const {carts} = this.props;
        var output = [];
        var cartput;
        var sumprice = 0;
        if(carts.length>0){
            var cartsList = [];
            for(let i=0;i<carts.length;i++){
                cartsList.unshift(carts[i]);
            }
            cartsList = _.uniqWith(cartsList,function(a,b){
                if(a._id==b._id){
                    return true;
                }
            });
            for(let i =0;i<cartsList.length;i++){
                sumprice += cartsList[i].currentPrice*cartsList[i].quantity;
                output.push(
                    <tr  key={i}>
                        <th scope="row">{i}</th>
                        <th>
                        <img 
                            src={`http://localhost:3000/${cartsList[i].thumb.filename}`} 
                            style={{ width:'50px',height:'50px'}} 
                        />
                        </th>
                        <th>{cartsList[i].title}</th>
                        <th>{cartsList[i].currentPrice}</th>
                        <th>{cartsList[i].quantity}</th>
                        <th>{cartsList[i].currentPrice*cartsList[i].quantity}</th>
                    </tr>
                )
            }

            cartput = (
                <div className="panel panel-danger" style={{marginTop:'20px'}}>
                    <div className="panel-heading" style={{overflow:'hidden'}}>
                        <span style={{float:'left',fontSize:'16px'}}>您的购物车</span>
                        <NavLink to="/products" style={{float:'right'}}>继续购买</NavLink>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>图片</th>
                                <th>名称</th>
                                <th>单价</th>
                                <th>数量</th>
                                <th>小计</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output}
                        </tbody>
                    </table>
                    <div className="panel-footer" style={{textAlign:'right',paddingRight:'20px'}} >
                        合计：
                        <span style={{color:'red',textAlign:'center',fontSize:'18px',marginRight:'20px'}}>
                            {sumprice}
                        </span>
                        <button type="button" className="btn btn-warning">结算</button>
                    </div>
                </div>
            )
            
        }else{
            cartput = (
                <div className="panel panel-default" style={{margin:'20px',height:'300px'}}>
                    <div className="panel-body" style={{textAlign:'center',lineHeight:'260px',fontSize:'24px'}}>                        
                        <NavLink to="/products">购物车空空的，快去挑选商品吧！</NavLink>
                    </div>
                </div>
            )
        }
        return (
            <div>
                 {cartput}       
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        carts: state.products.carts
    }
}
const CartsContext = connect(getValue)(Carts)

module.exports = CartsContext;
