import React,{Component}  from 'react';
import { Router,Route,hashHistory,IndexRoute,Link} from 'react-router';
import NavLink from './NavLink';

class App extends Component{
    render(){
        return (
            <div className="home-template">
            {/*start header */}
            <header className="main-header"  style={{"padding":"15px","background-image": "url(http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                       
                        <a className="branding" href="http://www.ghostchina.com" title="Ghost 开源博客平台">
                        <img src="http://static.ghostchina.com/image/b/46/4f5566c1f7bc28b3f7ac1fada8abe.png" alt="Ghost 开源博客平台"/></a>
                      
                        <h2 className="text-hide">Ghost 是一个简洁、强大的写作平台。你只须专注于用文字表达你的想法就好，其余的事情就让 Ghost 来帮你处理吧。</h2> 
                        <img src="http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg" alt="Ghost 博客系统" className="hide"/>
                    </div>
                </div>
            </div>
        </header>
          {/*  end header  */}
          {/* start navigation */}    
          <nav className="main-navigation">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="navbar-header">
                          <span className="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
                          <span className="sr-only">Toggle navigation</span>
                          <i className="fa fa-bars"></i>
                          </span>
                      </div>
                      <div className="collapse navbar-collapse" id="main-menu">
                          <ul className="menu">
                                <li className="nav-current" role="presentation"><Link to="/" >首页</Link></li>
                                <li  role="presentation"><Link to="/newsList">新闻论坛</Link></li>
                                <li  role="presentation"><Link to="/product">产品</Link></li>
                                <li  role="presentation"><Link to="/counter">分类</Link></li>
                                <li  role="presentation"><Link to="/carts">购物车</Link></li>
                                <li  role="presentation"><Link to="/about">关于</Link></li>
                            </ul>   
                      </div>
                  </div>
              </div>
          </div>
      </nav>
        {/* end navigation*/} 

            {/*路由渲染*/}
            <div className="container" role="main">
            {this.props.children}
            </div>

        {/*Footer*/}
        <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="widget">
                        <h4 className="title">最新文章</h4>
                        <div className="content recent-post">
                                <div className="recent-single-post">
                                    <a href="/android-app-for-ghost/" className="post-title">Android 版 Ghost 客户端来了！</a>
                                    <div className="date">2017年11月8日</div>
                                </div>
                                <div className="recent-single-post">
                                    <a href="/custom-excerpts/" className="post-title">自定义文章摘要（Excerpt）</a>
                                    <div className="date">2017年8月9日</div>
                                </div>
                                <div className="recent-single-post">
                                    <a href="/primary-tags/" className="post-title">首要“标签”</a>
                                    <div className="date">2017年8月3日</div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="widget">
                        <h4 className="title">标签云</h4>
                        <div className="content tag-cloud">
                                <a href="/tag/about-ghost/">Ghost</a>
                                <a href="/tag/release/">新版本发布</a>
                                <a href="/tag/javascript/">JavaScript</a>
                                <a href="/tag/promise/">Promise</a>
                                <a href="/tag/zhuti/">主题</a>
                                <a href="/tag/nodejs/">Node.js</a>
                                <a href="/tag/mysql/">MySQL</a>
                                <a href="/tag/nginx/">Nginx</a>
                                <a href="/tag/aliyun-ecs/">阿里云服务器</a>
                                <a href="/tag/ubuntu/">Ubuntu</a>
                                <a href="/tag/ghost-in-depth/">深度玩转 Ghost</a>
                                <a href="/tag/theme/">Theme</a>
                                <a href="/tag/zhu-shou-han-shu/">助手函数</a>
                                <a href="/tag/markdown/">Markdown</a>
                                <a href="/tag/proxy/">反向代理</a>

                            <a href="/tag-cloud/">...</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="widget">
                        <h4 className="title">合作伙伴</h4>
                        <div className="content tag-cloud friend-links">
                            <a href="http://www.bootcss.com" title="Bootstrap中文网" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'bootcsscom'])" target="_blank">Bootstrap中文网</a>
                            <a href="http://www.bootcdn.cn" title="开放CDN服务" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'bootcdncn'])" target="_blank">开放CDN服务</a>
                            <a href="http://www.gruntjs.net" title="Grunt中文网" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'gruntjsnet'])" target="_blank">Grunt中文网</a>
                            <a href="http://www.gulpjs.com.cn/" title="Gulp中文网" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'gulpjscomcn'])" target="_blank">Gulp中文网</a>
                            <hr/>
                            <a href="http://lodashjs.com/" title="Lodash中文文档" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'lodashjscom'])" target="_blank">Lodash中文文档</a>
                            <a href="http://www.jquery123.com/" title="jQuery中文文档" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'jquery123com'])" target="_blank">jQuery中文文档</a>
                            <hr/>
                            <a href="http://www.aliyun.com/" title="阿里云" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'aliyun'])" target="_blank">阿里云</a>
                            <hr/>
                            <a href="https://www.upyun.com/" title="又拍云" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'upyun'])" target="_blank">又拍云</a>
                            <a href="http://www.qiniu.com/" title="七牛云存储" onclick="_hmt.push(['_trackEvent', 'link', 'click', 'qiniu'])" target="_blank">七牛云存储</a>
                        </div>
                </div></div>
            </div>
        </div>
    </footer>

    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <span>Copyright &copy; <a href="http://www.ghostchina.com/">Ghost中文网</a></span> | 
                    <span><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11008151号</a></span> | 
                    <span>京公网安备11010802014853</span>
                </div>
            </div>
        </div>
    </div>
    {/*Footer*/}
    <a href="#" id="back-to-top"><i className="fa fa-angle-up"></i></a>

            </div>
        )
    }
}

module.exports = App;