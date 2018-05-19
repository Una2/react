import React,{Component}  from 'react';
import {connect} from 'react-redux';
import { Link ,browserHistory} from 'react-router'


class UserResign extends Component{
    getResign(e){
        // console.log(e);
        // window.history.go(-1);
        browserHistory.push('/');
    }
    render(){
        return(
            <div id="resiger" className="containe">
            <div className="reg-box">
                <div className="reg-tit"></div>
                <form action="javascript:void(0)" style={{width:"600px",height:"400px"}} id="myform">
                    <div className="gray_border_box">
                            {/* <!--<div className="reg-tit"></div>--> */}
                                <div className="reginputbox">
                                    <div className="input"><div className="width60">用 户 名：</div>
                                        <input type="text" name="uname" id="txtRegUserName" maxLength="30" className="fixlogininput inps text" value=""/><img src="../images/right.png" className="img_right"/><div className="tip"></div>
                                    </div>
                                    <div className="input"><div className="width60">输入密码：</div>
                                        <input type="password" name="upwd" id="txtRegPassword" maxLength="16" className="fixlogininput inps text"/><img src="../images/right.png" className="img_right"/><div className="tip"></div>
                                    </div>
                                    <div className="input"><div className="width60">重复密码：</div>
                                        <input type="password" name="repwd" id="txtRePassword" maxLength="16" className="fixlogininput inps text"/><img src="../images/right.png" className="img_right"/><div className="tip"></div>
                                    </div>
                                    <div className="input"><div className="width60">电子邮件：</div>
                                        <input type="text" name="email" id="txtEmail" maxLength="50" className="fixlogininput inps text" value=""/><img  className="img_right" src="../images/right.png"/><div className="tip"></div>
                                    </div>
                                    {/* <div className="input">
                                        <div id="verifycode-box"><div className="width60">验 证 码：</div>
                                            <input type="text" name="txtVerifyCode" style={{width:'100px'}} className ="text txtVerification " id="Txtidcode" maxLength="4" /><span id="idcode"></span><img src="../images/right.png" className="img_right"/>
                                            <div id="txtVerifyCodeChkMsg" className="tip"></div>
                                        </div>
                                    </div> */}
                                    <div className="input">
                                        <div className="width60"></div>
                                        <input type="checkbox" id="reg-proto" defaultChecked/>我已阅读并同意<a href="javascript:void(0);" id="elem-proto">《用户注册协议》</a><div id="err-proto" className="tip"></div>
                                    </div>
                                    <div id="reg-btn"><img onClick={(e)=>this.getResign(e)} id="btnUserRegSubmit" src="../images/btn-reg.png"/></div>
                                    {/* <!--<span className="loadingproc"><img src="../images/login-loader.gif">正在注册...</span>--> */}
                                    <div className="input">如果您已经是老用户，请点击
                                    <Link  to="/login" type="button" >
                                            [登录]
                                        </Link></div>
                                </div>
                            <div className="single-reg-fbg"></div>
                            <div className="hackbox"></div>
                    </div>
                </form>
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
const ResignContext =connect(getValue,{})(UserResign);//{fetchResign}
module.exports=ResignContext;