import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchProsList,fetchProsCate,addToCart,changeCate,changePage,searchPros} from '../actions/products';
import NavLink from './NavLink';

class Products extends Component{
    componentWillMount(){
        this.props.fetchProsList({page: 1,limit:9});
        this.props.fetchProsCate();
    }
    changePages(e){
        const page = parseInt(e.target.getAttribute('data-page'));
        this.props.changePage(page);
        const params = {page: page,limit:10,cateids:this.props.cateids};
        this.props.fetchProsList(params)
    }
    changeCates(e){
        const cateId = [];
        const cate = JSON.parse(e.target.getAttribute('data-cate'));
        cateId.push(cate._id);
        if(cate.children){
            for(let i=0;i<cate.children.length;i++){
                cateId.push(cate.children[i]._id)
            }
        }
        this.props.changeCate(cateId);
        const params = {page: 1,limit:10,cateids:cateId};
        this.props.fetchProsList(params)
    }
    addCart(e){
        const idx = e.target.getAttribute('data-idx');
        const addToCartProduct = this.props.prosLists.rows[idx];
        var amount = 'amount'+idx;
        addToCartProduct.quantity = parseInt(this.refs[amount].value);
        this.props.addToCart(addToCartProduct);
        this.refs.idx.value = 1;
    }
    handleChange(e) {
        this.props.searchPros(e.target.value);
    }
    handleSubmit(){
        const params = {page:1,limit:10,cateids:this.props.cateids,title:this.props.search};
        this.props.fetchProsList(params)
    }
    render(){
        const {page,cateids,search,carts,addToCart,prosLists,fetchProsList,prosCate,fetchProsCate,changeCate,changePage,searchPros} = this.props;      
        if(!prosLists.rows){
            return <div>数据请求中...</div>
        }
        
        var outputPages = [];
        var pages = 1;
        pages = prosLists.pages;
        for(let i=1; i<=pages;i++){
            outputPages.push(
                <li><a href="javascript:void(0)" onClick={ (e)=>this.changePages(e) } data-page={i} key={i}>{i}</a></li>
            )
        }

        var listsLen = prosLists.rows.length;
        var output = [];
        for(let i=0;i<listsLen;i++){          
            let colorS = [];
            let sizeS = [];
            for(var j=0;j<prosLists.rows[i].colors.length;j++){
                colorS.push(
                    <option value={prosLists.rows[i].colors[j]} key={j} style={{color:prosLists.rows[i].colors[j]}}>
                        {prosLists.rows[i].colors[j]}
                    </option>
                ) 
            }
            for(var q=0;q<prosLists.rows[i].size.length;q++){
                sizeS.push(
                    <option value={prosLists.rows[i].size[q]} key={q}>
                        {prosLists.rows[i].size[q]}
                    </option>
                )   
              
            }

            output.push(                           
                <li className="list-group-item" key={`b${i}`} style={{height:'250px',overflow:'hidden'}}>
                    <div style={{float:'left',width:'25%',height:'100%'}}>
                        <img 
                            src={`http://localhost:3000/${prosLists.rows[i].thumb.filename}`} 
                            style={{ width:'100%',height:'100%'}} 
                        />
                    </div>
                    <div style={{float:'left',height:'100%',width:'35%',marginLeft:'50px',marginRight:'50px'}}>
                        <h3 style={{width:'100%',textAlign:'center'}}>
                            {prosLists.rows[i].title}
                        </h3>
                        <p style={{overflow:'hidden',height:'28%',width:'100%'}}>
                            {prosLists.rows[i].description}
                        </p>  
                        <button type="button"  className="btn btn-success btn-sm" style={{textDecoration:'line-through',marginLeft:'20%'}}>原价：{prosLists.rows[i].originalPrice}</button>                      
                        <button type="button"  className="btn btn-danger btn-lg">现价：{prosLists.rows[i].currentPrice}</button>
                        <br/>
                        <span style={{float:'left',marginRight:'50px'}}>
                            地址：{prosLists.rows[i].address}
                        </span>
                        <span style={{float:'right',marginRight:'50px'}}>
                            库存：{prosLists.rows[i].amount}
                        </span>
                    </div>                
                    <div style={{float:'left',height:'100%',width:'30%'}}>
                        <div style={{overflow:'hidden',width:'100%'}}>
                            <form action="javaScript:void(0)">
                                <label style={{margin:'10px'}}>
                                    颜色：
                                    <select name='color' key="color" style={{width:'100px',height:'30px'}}>
                                        <option defaultSelected>
                                            请选择颜色
                                        </option>
                                        {colorS}
                                    </select>
                                </label>
                                <br/>
                                <label style={{margin:'10px'}}>
                                    型号：
                                    <select name='size' key="size" style={{width:'100px',height:'30px'}}>
                                        <option defaultSelected>
                                            请选择尺寸
                                        </option>
                                        {sizeS}
                                    </select>
                                </label>
                                <br/>                              
                                <label style={{margin:'10px'}}>
                                    数量：<input ref={`amount${i}`} type="text" defaultValue="1" style={{width:'100px',height:'30px'}}/>
                                </label>
                                <br/>
                                <label style={{margin:'10px',paddingLeft:'50px'}}>
                                    <button type="button" data-idx={i} className="btn btn-warning" onClick={ (e)=> {this.addCart(e)} }>加入购物车</button>
                                    <button type="button" className="btn btn-danger">立即购买</button>
                                </label>                              
                            </form>                                                      
                        </div>
                    </div>
                </li>
            )
        }

        var showCate = [];
        if(prosCate){
            for(var i=0;i<prosCate.length;i++){
                showCate.push(
                    <li role="presentation" className="active" key={`a${i}`}>
                        <a href="javascript:void(0)" 
                        id={prosCate[i]._id} 
                        role="tab" 
                        data-toggle="tab" 
                        aria-controls="" 
                        data-cate={JSON.stringify(prosCate[i])}  
                        aria-expanded="false" 
                        onClick={ (e)=>this.changeCates(e) }>
                        {prosCate[i].title}
                        </a>
                    </li>
                )
                if(prosCate[i].children){
                    for(var j=0;j<prosCate[i].children.length;j++){
                        showCate.push(
                            <li role="presentation" className="" key={j+1}>
                                <a href="javascript:void(0)" 
                                id={prosCate[i].children[j]._id} 
                                data-cate={JSON.stringify(prosCate[i].children[j])} 
                                role="tab" data-toggle="tab" 
                                aria-controls="" 
                                aria-expanded="false" 
                                onClick={ (e)=>this.changeCates(e) }>
                                {prosCate[i].children[j].title}
                                </a>
                            </li>
                        )
                    }
                }
            }
        }

        return (
            <div>
                <ul id="myTabs" className="nav nav-tabs" role="tablist">
                    {showCate}
                </ul>
                <form className="navbar-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"  onChange={ (e)=>this.handleChange(e) }/>
                    </div>
                        <button type="submit" className="btn btn-default" onClick={ (e)=>this.handleSubmit(e) }>搜索</button>
                </form>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                            <a href="javascript:void(0)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {outputPages}
                        <li>
                            <a href="javascript:void(0)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav> 
                <ul className="list-group">
                    {output}
                </ul>          
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        prosLists: state.products.prosLists,
        prosCate: state.products.prosCate,
        search: state.products.search,
        cateids: state.products.cateids,
        page: state.products.page
    }
}
const productsContext = connect(getValue,{addToCart,fetchProsList,fetchProsCate,changeCate,changePage,searchPros})(Products)

module.exports = productsContext;