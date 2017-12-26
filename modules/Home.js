import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchNewsList} from '../actions/news';
import {fetchProList} from '../actions/product';
import { Router,Route,hashHistory,IndexRoute,Link} from 'react-router';
var moment = require('moment');

class Home extends Component{
    componentWillMount(){
        this.props.fetchNewsList();
        this.props.fetchProList();
    }
    render(){
        const {fetchNewsList,newsList,fetchProList,proList} = this.props;

       if(newsList && newsList.rows && proList && proList.rows){
           var newsData=newsList.rows.map(function(item,index){
            var newsTime=item.date;
            return (
                <div className="row">
                <main className="col-md-8 main-content" key={index}>
                    <article id='109' className="post tag-android tag-ke-hu-duan">
                    <div className="post-head">
                    {/*新闻标题*/}
                        <h1 className="post-title"><a href="/android-app-for-ghost/">{item.title}</a></h1>
                        <div className="post-meta">
                            <span className="author">作者：<a href="/author/wangsai/">{item.author}</a></span> &bull;
                            <time className="post-date">{moment({newsTime}).format('YYYY MM DD')}</time>
                        </div>
                        </div>
                        <div className="featured-media">
                            <a href="/android-app-for-ghost/"><img src={`http://localhost:3000/${item.img}`} alt="Android 版 Ghost 客户端来了" /></a>
                        </div>
                        {/*新闻内容*/}
                        <div className="post-content">
                        <p>内容：{item.content}</p>
                        </div>
                        <div className="post-permalink">
<Link to={{pathname:"/newsList",state:{'id':item._id}}}  className="btn btn-default">阅读全文</Link>
                        
                        </div>
                        <footer className="post-footer clearfix">
                        <div className="pull-left tag-list">
                            <i className="fa fa-folder-open-o"></i>
                            <a href="/tag/android/">阅读量：{item.commentCount}</a>, <a href="/tag/ke-hu-duan/">评论数：{item.commentCount}</a>
                        </div>
                        <div className="pull-right share">
                        </div>
                    </footer>
                     </article> 
                 </main>
                 <aside className="col-md-4 sidebar" key={index+100}>
                 
                     <div className="widget">
                     <h4 className="title">推荐商品()</h4>
                     <div className="content community">
                     <p>{}</p>
                     <p><Link href="http://wenda.ghostchina.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])"><i className="fa fa-comments"></i> 商品颜色{item.color}</Link></p>
                     <p><Link href="http://weibo.com/ghostchinacom" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])"><i className="fa fa-weibo"></i> 商品详情：{item.detail}</Link></p>
                     </div>
                     </div>
                 
                     <div className="widget">
                     <h4 className="title">商品图片</h4>
                     <div className="content download" >
                     <a href="/download/" className="btn btn-default btn-block" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '下载Ghost'])">Ghost 中文版（0.7.4）</a>
                     </div>
                     </div>
                 
                     <div className="widget">
                     <h4 className="title">标签云</h4>
                     <div className="content tag-cloud">
                     <a href="/tag/ke-hu-duan/">客户端</a>
                     <a href="/tag/android/">Android</a>
                     <a href="/tag/jquery/">jQuery</a>
                     <a href="/tag/ghost-0-7-ban-ben/">Ghost 0.7 版本</a>
                     <a href="/tag/opensource/">开源</a>
                     <a href="/tag/zhu-shou-han-shu/">助手函数</a>
                     <a href="/tag/tag-cloud/">标签云</a>
                     <a href="/tag/navigation/">导航</a>
                     <a href="/tag/customize-page/">自定义页面</a>
                     <a href="/tag/static-page/">静态页面</a>
                     <a href="/tag/roon-io/">Roon.io</a>
                     <a href="/tag/configuration/">配置文件</a>
                     <a href="/tag/upyun/">又拍云存储</a>
                     <a href="/tag/upload/">上传</a>
                     <a href="/tag/handlebars/">Handlebars</a>
                     <a href="/tag/email/">邮件</a>
                     <a href="/tag/shortcut/">快捷键</a>
                     <a href="/tag/yong-hu-zhi-nan/">用户指南</a>
                 
                 
                     <a href="/tag-cloud/">...</a>
                     </div>
                     </div>
                             
                     </aside>

                     </div>
            )
        })
       }

        return (
              <div className='container'>  
              {/*新闻*/}  
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="1000">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
            
            <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img className="imgs" src="./templets/images/1.jpeg" alt="..."/>
                        <div className="carousel-caption">
                           
                            <p>钱多钱少，不如一口打心底舒服的热乎饭</p>
                        </div>
                    </div>

                    <div className="item">
                        <img  className="imgs" src="./templets/images/2.jpeg" alt="..."/>
                        <div className="carousel-caption">
                            
                            <p>为兄弟两肋插刀，兄弟却总是插他两刀</p>
                        </div>
                    </div>

                    <div className="item">
                    <img  className="imgs" src="./templets/images/3.jpeg" alt="..."/>
                    <div className="carousel-caption">
                       
                        <p>没想到，你是这样的故宫博物院院长！</p>
                    </div>
                    </div>

                    <div className="item">
                    <img  className="imgs" src="./templets/images/4.jpeg" alt="..."/>
                    <div className="carousel-caption">
                       {/*<h3></h3>*/}
                       <p>被面膜毁掉的中国女人</p>
                    </div>
                    </div>
            
            </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>

                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
        </div>
          {/*新闻*/}
          <section className="content-wrap">
            <div className="container">
             {/*news*/}
             {newsData}
            {/*aside*/}
         
                </div>
            </section>
</div>
           
        )
    }
}
const getValue=(state)=>{
    // console.log(state)
    return{
        newsList:state.newsData.newsList,
        proList:state.proData.proList
    }
}
const HomeContext=connect(getValue,{fetchNewsList,fetchProList})(Home)
module.exports = HomeContext;
   