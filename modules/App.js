import React,{Component}  from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink';

class App extends Component{
    // getLogin(){
    //     // browserHistory.push("/login")
    //     this.context.router.push("/login")
    // }
    render(){
        var imgStyle={width:'100%',height:'400px'}; 
        return (         
                <div >  
                    {/*导航条*/}         
                    <nav className="navbar navbar-inverse navbar-static-top" style={{marginBottom:0}}>
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">ReactWeb</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
                                    <li><NavLink to="/news">新闻</NavLink></li>                                   
                                    <li><NavLink to="/products">产品</NavLink></li>                                       
                                    <li><NavLink to="/carts">购物车</NavLink></li>                           
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li className="dropdown-header">Nav header</li>
                                            <li><a href="#">Separated link</a></li>
                                            <li><a href="#">One more separated link</a></li>
                                        </ul>
                                    </li>
                                    
                                        <Link  to="/login" type="button" className="btn btn-primary">
                                            Login
                                        </Link>
                                        <Link  to="/resign" type="button" style={{"marginLeft":"20px"}} className="btn btn-primary">
                                        Resign
                                        </Link>
                                    
                                </ul>
                            </div>                      
                        </div>
                    </nav>                       
                    {/*轮播图*/}  
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className=""></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                        <div className="item active left">
                            <img style={imgStyle} alt="First slide [900x500]" src="./images/lb1.jpg"/>
                        </div>
                        <div className="item next left">
                            <img style={imgStyle} alt="Second slide [900x500]" src="./images/lb2.jpg"/>
                        </div>
                        <div className="item">
                            <img style={imgStyle} alt="Third slide [900x500]" src="./images/lb5.jpg"/>
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
                    {/*主体*/}  
                    <div className="container" role="main">
                        {this.props.children}
                    </div>
                    {/*尾部*/}
                    <footer style={{lineHeight:'50px',textAlign:'center',borderTop:'1px solid #ccc'}}>
                        2017-2018 &copy; Tanking   
                    </footer>
                </div>

        )
    }
}

module.exports = App;