import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router"
import {fetchNewsList,fetchCateList,fetchOneNews} from '../actions/news'
var moment = require('moment');

class News extends Component {
    componentWillMount() {
        if(this.props.location.state){
            this.props.fetchOneNews(this.props.location.state.id);
        }else{
            this.props.fetchNewsList();
        }
        this.props.fetchCateList();
        
    }
    getNews(e){
        var cateId=e.target.getAttribute('data-row');
        this.props.fetchNewsList({cateId:cateId});
    }
    getNewsDetail(e){
        // console.log(e)
    }
    
    onSearchEvent(){
        var inputValue= this.refs.nameInput.value;
        this.props.fetchNewsList({title:inputValue});
    }
    
    render() {
        const {fetchNewsList,fetchCateList, fetchOneNews,oneNews,newsList,cateList} = this.props;
        if (!newsList.rows) {
            return <div>数据请求中...</div>
        }
      
    //   foreach is not a function????
        var showCate=[];
        var len=cateList.length;
        if(cateList){
            for(let i=0;i<len;i++){
                showCate.push(
                    <li>
                    <a href="" className="active">
                      <i className="icon icon-ul"></i>
                     {cateList[i].title}
                      </a>
                </li>
                );
                if(cateList[i].children && cateList[i].children.length>0){
                   for(let j=0;j<cateList[i].children.length;j++){
                    if(cateList[i].children[i]){
                        showCate.push(
                            <li style={{"cursor":"pointer"}} onClick={this.getNews.bind(this)} data-row={cateList[i].children[i]._id}>
                        {cateList[i].children[j].title}
                            </li>
                        )
                    }
                       

                        
                   }
                }
            }
            
        } 
        if(JSON.stringify(oneNews)!="{}"){
               
    // if(newsList.rows.length==0){
        var newsData=[];
        var newsTime=newsList.date;
        newsData.push(
            <div className="aw-item active" data-topic-id="50,">
            <a
                className="aw-user-name hidden-xs"
                data-id="2"
                href="http://wenda.ghostchina.com/people/wangsai"
                rel="nofollow">
                <img
                    src={`http://localhost:3000/${newsList.img}`}
                    alt=""/>
                <i className="icon icon-v"></i>
            </a>
            <div className="aw-question-content">
                <h4>
                    <a href="#">{newsList.title}</a>
                </h4>
                <Link
                to={{pathname:"/comment", state:{data:newsList} }}
                    className="pull-right text-color-999">评论{newsList.commentCount} 个</Link>

                <p>
                    <a
                        className="aw-question-tags"
                        href="http://wenda.ghostchina.com/explore/category-1">默认分类:{newsList.type}</a>
                    <a href="http://wenda.ghostchina.com/people/wangsai" className="aw-user-name">{newsList.author}</a>
                    <span className="text-color-999"> {newsList.commentCount} 次浏览 • {moment({newsTime}).format('YYYY MM DD')}
                    </span>
                    <span className="text-color-999 related-topic hide">
                    </span>
                </p>

            </div>
        </div>
        )
    // }
        }
if(newsList && newsList.rows){
        var newsData = newsList
        .rows
        .map(function (item, index) {
            var newsTime=item.date;
            return (
               
                    // {/**onClick={this.getNewsDetail.bind(this)}*/}
                        <div className="aw-item active" data-topic-id="50," key ={index}>
                            <a
                                className="aw-user-name hidden-xs"
                                data-id="2"
                                href="http://wenda.ghostchina.com/people/wangsai"
                                rel="nofollow">
                                <img
                                    src={`http://localhost:3000/${item.img}`}
                                    alt=""/>
                                <i className="icon icon-v"></i>
                            </a>
                            <div className="aw-question-content">
                                <h4>
                                    <a href="http://wenda.ghostchina.com/question/149">{item.title}</a>
                                </h4>
                                <Link
                                to={{pathname:"/comment", state:{data:item} }}
                                    className="pull-right text-color-999">评论{item.commentCount} 个</Link>

                                <p>
                                    <a
                                        className="aw-question-tags"
                                        href="http://wenda.ghostchina.com/explore/category-1">默认分类:{item.type}</a>
                                    <a href="http://wenda.ghostchina.com/people/wangsai" className="aw-user-name">{item.author}</a>
                                    <span className="text-color-999"> {item.commentCount} 次浏览 • {moment({newsTime}).format('YYYY MM DD')}
                                    </span>
                                    <span className="text-color-999 related-topic hide">
                                    </span>
                                </p>

                            </div>
                        </div>


                   
            )
        })
}
        return (

            <div className="aw-top-menu-wrap">
                <div className="container">
                    <div className="aw-logo hidden-xs">
                        <a href="http://wenda.ghostchina.com"></a>
                    </div>
                    <div className="aw-search-box  hidden-xs hidden-sm">
                   
                          
                            <input
                            ref='nameInput'
                                className="form-control search-query"
                                type="text"
                                placeholder="搜索问题、话题或人"
                                autoComplete="off"
                                name="q"
                                id="aw-search-query"/>
                            <button  onClick={this.onSearchEvent.bind(this)}>搜索</button>
                
                    
                    </div>
                    <div className="aw-top-nav navbar">
                        <div className="navbar-header">
                            <button className="navbar-toggle pull-left">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <nav role="navigation" className="collapse navbar-collapse bs-navbar-collapse">
                        <ul className="nav navbar-nav">
                        {showCate}
            
                    </ul>
                        </nav>
                    </div>
                    <div className="aw-user-nav">
                        <span>
                            <a
                                className="register btn btn-normal btn-success"
                                href="http://wenda.ghostchina.com/account/register/">注册</a>
                            <a
                                className="login btn btn-normal btn-primary"
                                href="http://wenda.ghostchina.com/login/">登录</a>
                        </span>

                    </div>
                </div>
                <div className="aw-container-wrap">

                    <div className="container">
                        <div className="row">
                            <div className="aw-content-wrap clearfix">
                                <div className="col-sm-12 col-md-9 aw-main-content">
                                    <div className="aw-mod aw-notification-box hide" id="index_notification">
                                        <div className="mod-head common-head">
                                            <h2>
                                                <span className="pull-right">
                                                    <a
                                                        href="http://wenda.ghostchina.com/setting/privacy/#notifications"
                                                        className="text-color-999">
                                                        <i className="icon icon-setting"></i>
                                                        通知设置</a>
                                                </span>
                                                <i className="icon icon-bell"></i>新通知<em className="badge badge-important" name="notification_unread_num"></em>
                                            </h2>
                                        </div>
                                        <div className="mod-body">
                                            <ul id="notification_list"></ul>
                                        </div>
                                        <div className="mod-footer clearfix">
                                            <a
                                                href="javascript:;"
                                                onclick="AWS.Message.read_notification(false, 0, false);"
                                                className="pull-left btn btn-mini btn-gray">我知道了</a>
                                            <a
                                                href="http://wenda.ghostchina.com/notifications/"
                                                className="pull-right btn btn-mini btn-success">查看所有</a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs aw-nav-tabs active hidden-xs">
                                        <li>
                                            <a href="http://wenda.ghostchina.com/sort_type-unresponsive">等待回复</a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://wenda.ghostchina.com/sort_type-hot__day-7"
                                                id="sort_control_hot">热门</a>
                                        </li>
                                        <li className="active">
                                            <a href="http://wenda.ghostchina.com/is_recommend-1">推荐</a>
                                        </li>
                                        <li>
                                            <a href="">最新</a>
                                        </li>

                                        <h2 className="hidden-xs">
                                            <i className="icon icon-list"></i>
                                            发现</h2>
                                    </ul>
                                    <div className="aw-mod aw-explore-list" >
                                    <div className="mod-body">
                                        <div className="aw-common-list" >
                                    {newsData}
                                    </div>
                                    </div>
                                    <div className="mod-footer"></div>
                                </div>
                                </div>
                                <div className="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm">
                                    <div className="aw-mod aw-text-align-justify">
                                        <div className="mod-head">
                                            <a href="http://wenda.ghostchina.com/topic/channel-hot" className="pull-right">更多 &gt;</a>
                                            <h3>热门话题</h3>
                                        </div>
                                        <div className="mod-body"></div>
                                    </div>
                                    <div className="aw-mod aw-text-align-justify">
                                        <div className="mod-head">
                                            <a href="http://wenda.ghostchina.com/people/" className="pull-right">更多 &gt;</a>
                                            <h3>热门用户</h3>
                                        </div>
                                        <div className="mod-body"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="aw-footer-wrap">
                    <div className="aw-footer">
                        Copyright © 2017<span className="hidden-xs">
                            - 京ICP备11008151号, All Rights Reserved</span>

                        <span className="hide">Powered By
                            <a href="http://www.wecenter.com/?copyright" target="blank">WeCenter 3.0 Beta 2</a>
                        </span>

                    </div>
                </div>

            </div>

        )
    }
}

const getValue = (state) => {
    return {newsList: state.newsData.newsList,
        cateList:state.newsData.cateList,
        oneNews:state.newsData.oneNews}
}
const NewsContext = connect(getValue, {fetchNewsList,fetchCateList,fetchOneNews})(News)

module.exports = NewsContext;