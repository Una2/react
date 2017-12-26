import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCommentList} from '../actions/comment'


class Comment extends Component {
    componentWillMount() {
        this.props.fetchCommentList({newsId:this.props.location.state.data._id});       
    }
    render(){
        const {fetchCommentList,commentList}=this.props;
      
        
        // if(!commentList){
        //     return <div>数据请求中....</div>
        // }
        console.log(commentList,"commentList")

if(this.props.location.state.data){
    var newItem=this.props.location.state.data;
    var newsDetail=[];
    newsDetail.push(
        <div className="aw-mod aw-question-detail aw-item">
        <div className="mod-head">
            <h1>{newItem.title }</h1>
         </div>
        <div className="mod-body">
            <div className="content markitup-box">
           { newItem.content}
                
          </div>
        </div>
        <div className="mod-footer">
            <div className="meta">
                <span className="text-color-999"></span>

                <a data-id="572" data-type="question" className="aw-add-comment text-color-999 " data-comment-count="0" data-first-click="hide"><i className="icon icon-comment"></i>添加评论</a>
                                                <div className="pull-right more-operate">
                    
                
                    <a className="text-color-999 dropdown-toggle" data-toggle="dropdown">
                        <i className="icon icon-share"></i>{newItem.commentCount}个回复</a>
               </div>
              
            </div>
        </div>
    
        <div className="aw-invite-box hide">
            <div className="mod-head clearfix">
                <div className="search-box pull-left">
                    <input id="invite-input" className="form-control" type="text" placeholder="搜索你想邀请的人..."/>
                    <div className="aw-dropdown">
                        <p className="title">没有找到相关结果</p>
                        <ul className="aw-dropdown-list"></ul>
                    </div>
                    <i className="icon icon-search"></i>
                </div>
                <div className="invite-list pull-left hide">
                    已邀请:
                                                    </div>
            </div>
                                    </div>
        
        <div className="aw-question-related-box hide">
            <form action="http://wenda.ghostchina.com/publish/ajax/save_related_link/" method="post" onsubmit="return false" id="related_link_form">
                <div className="mod-head">
                    <h2>与内容相关的链接</h2>
                </div>
                <div className="mod-body clearfix">
                    <input type="hidden" name="item_id" value="572"/>
                    <input type="text" className="form-control pull-left" name="link" value="http://"/>

                    <a onclick="AWS.ajax_post($('#related_link_form'));" className="pull-left btn btn-success">提交</a>
                </div>
            </form>
        </div>
        
    </div>
    )
}

 if(commentList){
    if(commentList.rows&&commentList.rows.length==0){
        var comData=[];
        comData.push(
            <div className="aw-mod aw-question-comment">
            <div className="mod-head">
                <ul className="nav nav-tabs aw-nav-tabs active">
                    
                 <h3 className="hidden-xs">第{index}个回复</h3>
                </ul>
            </div>
            <div className="mod-body aw-feed-list"></div>
            <div className="mod-footer">
             <div className="aw-load-more-content hide" id="load_uninterested_answers">
                    <span className="text-color-999 aw-alert-box text-color-999" href="javascript:;" tabindex="-1" onclick="AWS.alert('被折叠的回复是被你或者被大多数用户认为没有帮助的回复');">为什么被折叠?</span>
                        <a href="javascript:;" className="aw-load-more-content">
                        <span className="hide_answers_count">0</span> 个回复被折叠</a>
                    </div>

                    <div className="hide aw-feed-list" id="uninterested_answers_list"></div>
                                        </div>

                                </div>
        )
        


    }


    if(commentList.rows&&commentList.rows.length>0){
        var comData=commentList.rows.map((item,index)=>{
            return(
                <div className="aw-mod aw-question-comment">
                <div className="mod-head">
                    <ul className="nav nav-tabs aw-nav-tabs active">
                        
                     <h2 className="hidden-xs">回复内容;{item.content}</h2>
                    </ul>
                </div>
                <div className="mod-body aw-feed-list">第{index+1}个回复</div>
                <div className="mod-footer">
                 <div className="aw-load-more-content " id="load_uninterested_answers">
                        <span className="text-color-999 aw-alert-box text-color-999" href="javascript:;" tabindex="-1">举报此用户?</span>
                            <a href="javascript:;" className="aw-load-more-content">
                            </a>
                        </div>
                     </div>
                  </div>
            )
        })
    }

 }
   
        return (
            <div>
            <div className="aw-top-menu-wrap">
            <div className="container">
                <div className="aw-logo hidden-xs">
                    <a href="http://wenda.ghostchina.com"></a>
                </div>
                <div className="aw-search-box  hidden-xs hidden-sm">
                    <form className="navbar-search" action="http://wenda.ghostchina.com/search/" id="global_search_form" method="post">
                        <input className="form-control search-query" type="text" placeholder="搜索问题、话题或人" autocomplete="off" name="q" id="aw-search-query"/>
                        <span title="搜索" id="global_search_btns" onclick="$('#global_search_form').submit();"><i className="icon icon-search"></i></span>
                        <div className="aw-dropdown">
                            <div className="mod-body">
                                <p className="title">输入关键字进行搜索</p>
                                <ul className="aw-dropdown-list hide"></ul>
                                <p className="search"><span>搜索:</span><a onclick="$('#global_search_form').submit();"></a></p>
                            </div>
                            <div className="mod-footer">
                                <a href="" onclick="$('#header_publish').click();" className="pull-right btn btn-mini btn-success publish">发起问题</a>
                            </div>
                        </div>
                    </form>
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
                         <li><a href="" className=""><i className="icon icon-ul"></i> 发现</a></li>
                        <li><a href="http://wenda.ghostchina.com/topic/"><i className="icon icon-topic"></i> 话题</a></li>
    
                       </ul>
                    </nav>
                </div>
                <div className="aw-user-nav">
                                        <span>
                            <a className="register btn btn-normal btn-success" href="http://wenda.ghostchina.com/account/register/">注册</a>
                            <a className="login btn btn-normal btn-primary" href="http://wenda.ghostchina.com/login/">登录</a>
                        </span>
                </div>
            </div>
        </div>
        {/*数据*/}
        <div className="aw-container-wrap">
        <div className="container">
        <div className="row">
            <div className="aw-content-wrap clearfix">
                <div className="col-sm-12 col-md-12 aw-main-content">
                    
                    <div className="aw-mod aw-topic-bar" id="question_topic_editor" data-type="question" data-id="572">
                        <div className="tag-bar clearfix">
                            
                      </div>
                    </div>
                    
                    {/**新闻标题*/}
                    {newsDetail}
                                    

                                    
                    <div className="aw-mod aw-replay-box question">
                        <a name="answer_form"></a>
                  <p align="center">要回复问题请先<a href="http://wenda.ghostchina.com/login/">登录</a>或<a href="http://wenda.ghostchina.com/account/register/">注册</a></p>
                  </div>
                  </div>
            
            </div>
        </div>
    </div>
</div>
{/*********/}
            {comData}

  </div>
        )
    }
}
const getValue = (state) => {
    return {commentList: state.comData.commentList}
}
const comContext = connect(getValue, {fetchCommentList})(Comment)

module.exports = comContext;