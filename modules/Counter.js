import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchProList,fetchCateList} from '../actions/product';
import {increase,decrease,fetchList,addToCart} from '../actions/counter'
var moment = require('moment');


class Counter extends Component{
    componentWillMount(){
        this.props.fetchList();
        // this.props.fetchProList();
        this.props.fetchCateList();
        // {id:this.props.location.state.data._id}
    }
    getProList(e){
        var id=e.target.getAttribute("data-row");
        this.props.fetchProList({id:id});
    }
    getProDetail(e){
    // console.log(e.target.getAttribute("data-row"));
    }

    changePage(e){
        const page = e.target.getAttribute('data-page');
        const params = {page: parseInt(page)}
        this.props.fetchList(params)
    }

    addCart(e){
        const idx = e.target.getAttribute('data-idx');
        const addToCartProduct = this.props.lists.rows[idx];
        console.log(this.props.lists.rows[idx],"currentProducty")
        this.props.addToCart(addToCartProduct)
    }

    render(){
        
        const {value,value1,lists,carts,cateList,proList,increase,decrease,fetchList,addToCart,fetchCateList,fetchProList} = this.props;
      
        // console.log(lists,"111")
        if(!lists || !proList){
            return <div>数据请求中...</div>
        }
        var output = [];
        var cartsList = _.uniqWith(carts,_.isEqual);
        for(let i =0;i<cartsList.length;i++){
            output.push(
                <li key={i}>名称：{cartsList[i].title} 数量：{cartsList[i].quantity}</li>
            )
        }
        var output = [];
        var outputPages = [];
        var pages = 1;
        pages = Math.ceil(lists.total/20);
        for(let i=1; i<=pages;i++){
            outputPages.push(
                <li><a href="javascript:void(0)"  onClick={ (e)=>this.changePage(e) } data-page={i} key={i}>{i}</a></li>
            )
        }
        // if(cateList && cateList.length>0){
        //     var cateData=[];
        //     for(let i=0;i<cateList.length;i++){
        //         cateData.push(<h2 className="panel-title">
        //         <i className="fa fa-pencil-square-o" >{cateList[i].title}</i></h2>);
        //         if(cateList[i].children && cateList[i].children.length>0){
        //            for(let j=0;j<cateList[i].children.length;j++){
        //             cateData.push(<span style={{"cursor":"pointer"}} onClick={(e)=>this.getProList(e)} data-row={cateList[i]._id}>{cateList[i].children[j].title}</span>) 
        //            }
        //         }
        //     }

        // }
      
    if( lists && lists.rows){
        console.log(lists,"listslistslistslists")
        var proData=[];
        for(var index=0;index<lists.rows.length;index++){
            var item=lists.rows[index];
            // var item1=lists.rows[index+1];
            // var item2=lists.rows[index+2];
            // var item3=lists.rows[index+3];
         var proTime=item.date;
         proData.push (
            <div className="row" key={index}>
          <div className="col-sm-12 col-md-12" >
          <div className="thumbnail">
            <img src={`http://localhost:3000/${item.img[0]}`} alt="..."/>
            <div className="caption">
              <h3>产品名称：{item.name}</h3>
              <div>产品介绍：{item.detail}</div>
              <p>产品颜色：{item.color}</p>
              <p>库存量：{item.number}</p>
              <p>
<a className="btn btn-primary" data-idx={index+3} role="button" href="javascript:void(0)" onClick={ (e)=> {this.addCart(e)} }>加入购物车</a>                            
               <a href="#" className="btn btn-default" role="button">去结算</a></p>
            </div>
          </div>
        </div>
          </div>
         )
     }
    }




        return (
            <div className='container'>
            {proData}
                <nav aria-label="...">
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </nav>
                <br/>
                <br/>
                
                <section className="content-wrap">
                <div className="container">
                 {/*news*/}
                 {/*newsData*/}
                {/*aside*/}
            
                    </div>
                </section>


            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        value: state.reducer.count,
        value1: state.reducer.count1,
        lists: state.reducer.lists,
        carts: state.carts,
        proList:state.proData.proList,
        cateList:state.proData.cateList
    }
}
const CounterContext = connect(getValue,{increase,decrease,fetchList,addToCart,fetchProList,fetchCateList})(Counter)


module.exports = CounterContext;