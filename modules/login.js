import React,{Component}  from 'react';
import {connect} from 'react-redux';
import { Link ,browserHistory} from 'react-router'



class UserLogin extends Component{
    getLogin(e){
        // console.log(e);
        // window.history.go(-1);
        browserHistory.push('/')
    }
    render(){
        return(
            <div className="box">
                <div className="gray_border_box">
        <div className="log-reg-box" style={{"marginLeft":'250px'}}>
            <div className="log-tit"></div>
            <form name="frmUserLogin" id="frmUserLogin" autoComplete="off" action="javascript:void(0)">
                <input type="hidden" name="requestVC" value="1"/>
                <input type="hidden" name="vcTag" value="login"/>
                <input type="hidden" name="returnurl" value=""/>
                <div className="input">
                    <div className="width60">用 户 名：</div>
                    <input type="text" id="username" name="uname" maxLength="30" className="fixlogininput text"/>
                    <div className="tip reg_errmsg"></div>
                </div>
                <div className="input">
                    <div className="width60">
                        <span>密</span>
                        <span className="width24"></span>
                        <span>码：</span>
                    </div>
                    <input type="password" id="password" name="upwd" maxLength="20" className="fixlogininput text"/>&nbsp;
                    <a href="#">忘记密码？</a>
                    <div id="txtLoginPasswordChkMsg" className="tip reg_errmsg tipp"></div>
                </div>
                {/* <div className="input" style={{display: 'block'}}>
                    <div className="width60">验 证 码：</div>

                    <input type="text" name="txtVerifyCode" style={{width:'100px'}} className="txtVerification fixlogininput text" id="Txtidcode" maxLength="4"/>
                    <span id="idcode"></span>
                    <img src="../images/right.png" className="img_right"/>
                    <div id="txtVerifyCodeChkMsg" className="tip"></div>
                    
                </div> */}
                <div className="input">
                    <div id="login-btn">
                        <img onClick={(e)=>this.getLogin(e)} src="../images/btn-login.png"/>
                        <div id="login_loading">
                            <img src="./images/login-loader.gif"/>
                            <span id="login_loading_msg"> 正在登录,请稍候...</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{'marginLeft':'50px'}}>
                        <div style={{width:'100%', height:'30px', lineHeight:'30px', fontSize: '12px', color:'#666'}}>使用合作网站账号登录NO5时尚广场</div>
                        <div style={{width:'100%', height:'30px'}} >
                            <a href="#">
                                <img src="./images/union_alipay.jpg" alt="使用支付宝帐号登录"/>
                            </a>
                            <a href="javascript:void(0)">
                                <img src="./images/union_qq.jpg" alt="使用QQ帐号登录"/>
                            </a>
                            <a href="javascript:void(0)">
                                <img src="./images/union_360.jpg" alt="使用360帐号登录" style={{'marginLeft': '6px'}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
            </div>
        )
    }
}
const getValue=(state)=>{
    return{
        newsLists:state.news.newsLists
    }
}
const LoginContext =connect(getValue,{})(UserLogin);//{fetchLogin}
module.exports=LoginContext;