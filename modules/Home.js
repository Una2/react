import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchNewsList} from '../actions/news';
import {fetchProsList,addToCart} from '../actions/products';
import NavLink from './NavLink';

class Home extends Component{
    componentWillMount(){
        this.props.fetchNewsList();
        this.props.fetchProsList();
    }
    addCart(e){
        const idx = e.target.getAttribute('data-idx');
        const addToCartProduct = this.props.prosLists.rows[idx];
        this.props.addToCart(addToCartProduct)
    }
    render(){       
        const {newsLists,prosLists,fetchNewsList,fetchProsList} = this.props;      
        if(!newsLists.rows||!prosLists.rows){
            return <div>数据请求中...</div>
        }
        
        var showNews = [];
        for(let i=0;i<newsLists.rows.length;i++){
            if(i%2){
                showNews.push(                           
                    <li className="list-group-item" key={i} style={{height:'250px'}}>
                        <NavLink to={`/newDetail/${newsLists.rows[i]._id}`} style={{color:'#000',width:'100%',height:'100%',overflow:'hidden'}}>
                            <div style={{float:'left',width:'25%',height:'100%'}}>
                                <img 
                                    src={`http://localhost:3000/${newsLists.rows[i].thumb.filename}`} 
                                    style={{ width:'100%',height:'100%'}} 
                                />
                            </div>                
                            <div style={{float:'right',height:'100%',width:'70%'}}>
                                <h2 style={{width:'100%',textAlign:'center'}}>
                                    {newsLists.rows[i].title}
                                </h2>
                                <p style={{overflow:'hidden',height:'45%',width:'100%'}}>
                                    {newsLists.rows[i].content}
                                </p>
                                <div style={{overflow:'hidden',width:'100%'}}>
                                    <span style={{float:'left'}}>
                                        {newsLists.rows[i].date}
                                    </span>
                                    <span style={{float:'right'}}>
                                        评论数：
                                        <span style={{color:'red'}}>
                                            {newsLists.rows[i].count}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                )
            }else{
                showNews.push(                           
                    <li className="list-group-item" key={i} style={{height:'250px'}}>
                        <NavLink to={`/newDetail/${newsLists.rows[i]._id}`} style={{color:'#000',width:'100%',height:'100%',overflow:'hidden'}}>
                            <div style={{float:'right',width:'25%',height:'100%'}}>
                                <img 
                                    src={`http://localhost:3000/${newsLists.rows[i].thumb.filename}`} 
                                    style={{ width:'100%',height:'100%'}} 
                                />
                            </div>                
                            <div style={{float:'left',height:'100%',width:'70%'}}>
                                <h2 style={{width:'100%',textAlign:'center'}}>
                                    {newsLists.rows[i].title}
                                </h2>
                                <p style={{overflow:'hidden',height:'45%',width:'100%'}}>
                                    {newsLists.rows[i].content}
                                </p>
                                <div style={{overflow:'hidden',width:'100%'}}>
                                    <span style={{float:'left'}}>
                                        {newsLists.rows[i].date}
                                    </span>
                                    <span style={{float:'right'}}>
                                        评论数：
                                        <span style={{color:'red'}}>
                                            {newsLists.rows[i].count}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                )
            }                      
        }
        var showPros = [];
        for(let i=0;i<2;i++){
            var showPro = [];
            var Pro = []
            for(let j=0;j<2;j++){
                var index = i*2+j;
                Pro.push(
                    <div key={index} style={{float:'left',width:'50%',height:'100%',border:'1px #ccc solid'}}>
                        <div style={{width:'100%',height:'50%',textAlign:'center'}}>
                            <img 
                                src={`http://localhost:3000/${prosLists.rows[index].thumb.filename}`} 
                                style={{ width:'50%',height:'100%'}} 
                            />
                        </div>                
                        <div style={{height:'50%',width:'100%'}}>
                            <h2 style={{width:'100%',textAlign:'center'}}>
                                {prosLists.rows[index].title}
                            </h2>
                            <div style={{overflow:'hidden',width:'100%'}}>
                                <div style={{float:'left',width:'60%'}}>
                                    <p style={{paddingLeft:'50px',height:"60px",overflow:'hidden'}}>
                                        描述：{prosLists.rows[index].description}
                                    </p>
                                    <p style={{paddingLeft:'50px'}}>
                                        库存：<span style={{fontSize:'16px'}}>
                                                {prosLists.rows[index].amount}
                                            </span>
                                    </p>                                       
                                </div>
                                <div style={{float:'right',width:'40%'}}>
                                    <p style={{paddingLeft:'50px'}}>
                                        <span style={{display:'block',background:'green',width:'80px',height:'24px',textAlign:'center',lineHeight:'24px',color:'#fff',borderRadius:'5px',textDecoration:'line-through'}}>
                                            原价：{prosLists.rows[index].originalPrice}
                                        </span>
                                        
                                    </p>
                                    <p style={{paddingLeft:'50px'}}>
                                        <span style={{display:'block',background:'red',width:'100px',height:'36px',textAlign:'center',lineHeight:'36px',color:'#fff',borderRadius:'5px'}}>
                                            秒杀价：{prosLists.rows[index].currentPrice}
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <button type="button" data-idx={index} className="btn btn-warning btn-lg" onClick={ (e)=> {this.addCart(e)} }>加入购物车</button>
                            </div>
                        </div> 
                    </div>  
                )
            }
            showPro = (
                <li className="list-group-item" key={i} style={{height:'500px',overflow:'hidden'}}>
                    {Pro}
                </li>
            )
            showPros.push(showPro)
        }

        return (
            <div>
                <div className="panel panel-success" style={{marginTop:'20px'}}>
                    <div className="panel-heading" style={{overflow:'hidden'}}>
                        <span style={{float:'left',fontSize:'16px'}}>最新新闻</span>
                        <NavLink to="/news" style={{float:'right'}}>查看更多</NavLink>
                    </div>
                    <ul className="list-group">
                        {showNews}
                    </ul>
                </div>

                <div className="panel panel-info" style={{marginTop:'20px'}}>
                    <div className="panel-heading" style={{overflow:'hidden'}}>
                        <span style={{float:'left',fontSize:'16px'}}>最新产品</span>
                        <NavLink to="/products" style={{float:'right'}}>查看更多</NavLink>
                    </div>
                    <ul className="list-group">
                        {showPros}
                    </ul>
                </div>

            </div>
        )
    }
}
const getValue = (state)=>{
    return {
        newsLists: state.news.newsLists,
        prosLists: state.products.prosLists,
    }
}
const HomeContext = connect(getValue,{fetchNewsList,fetchProsList,addToCart})(Home)

module.exports = HomeContext;