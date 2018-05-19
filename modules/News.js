import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchNewsList,fetchNewsCate,changeCate,changePage,searchNews} from '../actions/news';
import NavLink from './NavLink';

class News extends Component{
    componentWillMount(){
        this.props.fetchNewsList({page: 1,limit:10});
        this.props.fetchNewsCate();
    }
    changePages(e){
        const page = parseInt(e.target.getAttribute('data-page'));
        this.props.changePage(page);
        const params = {page: page,limit:10,cateids:this.props.cateids};
        this.props.fetchNewsList(params)
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
        this.props.fetchNewsList(params)
    }
    handleChange(e) {
        this.props.searchNews(e.target.value);
    }
    handleSubmit(){
        const params = {page:1,limit:10,cateids:this.props.cateids,title:this.props.search};
        this.props.fetchNewsList(params)
    }
    render(){
        const {newsLists,fetchNewsList,newsCate,fetchNewsCate,changeCate,changePage,searchNews,page,cateids,search} = this.props;      
        if(!newsLists.rows){
            return <div>数据请求中...</div>
        }

        var outputPages = [];
        var pages = 1;
        pages = newsLists.pages;

        for(let i=1; i<=pages;i++){
            outputPages.push(
                <li><a href="javascript:void(0)" onClick={ (e)=>this.changePages(e) } data-page={i} key={i}>{i}</a></li>
            )
        }

        var listsLen = newsLists.rows.length;
        var output = [];
        for(let i=0;i<listsLen;i++){
            output.push(                           
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
                                    评论数：<span style={{color:'red'}}>{newsLists.rows[i].count}</span>
                                </span>
                            </div>
                        </div>
                    </NavLink>
                </li>
            )
        }
            var showCate = [];
            if(newsCate){
                for(var i=0;i<newsCate.length;i++){
                    showCate.push(
                        <li role="presentation" className="active">
                            <a href="javascript:void(0)" 
                            id={newsCate[i]._id} 
                            role="tab" 
                            data-toggle="tab" 
                            aria-controls="" 
                            data-cate={JSON.stringify(newsCate[i])}  
                            aria-expanded="false" 
                            onClick={ (e)=>this.changeCates(e) }>
                            {newsCate[i].title}
                            </a>
                        </li>
                    )
                    if(newsCate[i].children){
                        for(var j=0;j<newsCate[i].children.length;j++){
                            showCate.push(
                                <li role="presentation" className="">
                                    <a href="javascript:void(0)" 
                                    id={newsCate[i].children[j]._id} 
                                    data-cate={JSON.stringify(newsCate[i].children[j])} 
                                    role="tab" data-toggle="tab" 
                                    aria-controls="" 
                                    aria-expanded="false" 
                                    onClick={ (e)=>this.changeCates(e) }>
                                    {newsCate[i].children[j].title}
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

                <form className="navbar-form" action='javascript:void(0))'>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" onChange={ (e)=>this.handleChange(e) }/>
                    </div>
                        <button type="button" className="btn btn-default" onClick={ (e)=>this.handleSubmit(e) }>
                            搜索
                        </button>
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
        newsLists: state.news.newsLists,
        newsCate: state.news.newsCate,
        search: state.news.search,
        cateids: state.news.cateids,
        page: state.news.page
    }
}
const NewsContext = connect(getValue,{fetchNewsList,fetchNewsCate,changeCate,changePage,searchNews})(News)

module.exports = NewsContext;