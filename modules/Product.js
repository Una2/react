import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {fetchProList,fetchCateList} from '../actions/product';
import {Link} from 'react-router'

var _ = require('lodash');


class Product extends Component{
    componentWillMount() {
        this.props.fetchProList();
        this.props.fetchCateList();      
    }
    getProList(e){
        var id=e.target.getAttribute("data-row");
        this.props.fetchProList({id:id});
    }
    getProDetail(e){
    console.log(e.target.getAttribute("data-row"));
    }
    render(){
        const {carts,cateList,proList,fetchCateList,fetchProList} = this.props;
        // console.log(cateList);
        // console.log(111)
        // console.log(proList,222)
        var cartsList = _.uniqWith(carts,_.isEqual);

        var output = [];
        for(let i =0;i<cartsList.length;i++){
            output.push(
                <li key={i}>名称：{cartsList[i].title} 数量：{cartsList[i].quantity}</li>
            )
        }
        if(!proList){
            return <div>数据请求中...</div>
        }
        if(cateList && cateList.length>0){
            // var cateData=cateList.map(function(item,index){
            //     return (
            //         <h2 className="panel-title">
            //            <i className="fa fa-pencil-square-o">{item.title}</i>
            //            <ul>
            //             <li v-for={}></li>
            //            </ul>
            //         </h2>
            //     )
            // })
            var cateData=[];
            for(let i=0;i<cateList.length;i++){
                cateData.push(<h2 className="panel-title">
                <i className="fa fa-pencil-square-o" >{cateList[i].title}</i></h2>);
                if(cateList[i].children && cateList[i].children.length>0){
                   for(let j=0;j<cateList[i].children.length;j++){
                    cateData.push(<span style={{"cursor":"pointer"}} onClick={this.getProList.bind(this)} data-row={cateList[i]._id}>{cateList[i].children[j].title}</span>) 
                   }
                }
            }

        }
        if(proList.rows && proList.rows){
            var tempList=[];
            var proData=proList.rows.map((item,index)=>{
                console.log(item)
                return(
                    <li className="syllabus_widget video_widget" key={index} data-status="None">
                        
                        <div style={{"vertical-align":"middle"}}><h4 className="pull-left">{index+1} &nbsp;&nbsp;</h4><img src={`http://localhost:3000/${item.img[0]}`}/></div>
                        <a href="/Courses/All/Probability/Basic-Problems-in-Probability">
                            <h4 className="pull-left">商品名称：{item.name}  &nbsp;&nbsp;商品详情 ：{item.detail}  &nbsp;&nbsp;商品价格：{item.price}  &nbsp;&nbsp;商品颜色:{item.color}</h4>
                        </a>
                        <div className="syllabus_select_box pull-right">
                                <div className="syllabus_price pull-right">
                                    <Link to={{pathname:"/counter",query:{name: 'qzz', pwd:'123'}, state:{data:item} }}>
                                    {/*data-row={item._id} onClick={this.getProDetail.bind(this)}*/}
                                   <span>立即购买</span>                                   
                                    </Link>
                                </div>
                                <div className="syllabus_price pull-right">
                                
                                    <span style={{"padding-right":"15px"}}>
                                    库存量{item.number}
                                    </span>
                                </div>
                        </div>
                    </li>
                )
            })
        }
        return (
            <div>
                {output}
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content_area">
                            <div className="main_content center_content" style={{"max-width":"1125px"}}>
            
                                <div className="content_two_column">
                                    <div className="content_left pull-left courseTopFix">
                                    <div className="course_syllabus_top">
                                    <div className="pull-left" style={{"line-height": "35px"}}>
                                       
                                    </div>
                                    </div>
                                        <div className="syllabus_widget_area">
                                            <div id="message-for-students" className="panel panel-warning" style={{"display:none;margin-top":"14px"}}>
                                                <div className="panel-heading">
                                                    {/*分类*/}
                                                    {cateData}
                                                </div>
                                                <div className="panel-body">
                                             {/* <h4>最新产品</h4>*/}               
                                                </div>
                                            </div>
                                            <ul>
                                              {/*产品*/}   
                                              {/*tempList*/}
                                              {proData}
            
                                            </ul>
                                        </div>
                                        <div className="col-md-12">
                                                <div className="free_trial_area text-center">
                                                    <a data-toggle="modal" data-target="#free_trial_PopUp" className="free_trial_btn"><span>Start Studying Now for Free</span></a>
                                                </div>
                                        </div>
                                    </div>
                                    <aside className="sidebar pull-right">
                                        <div className="sidebar_top">
                                            <div className="upper_sidebar">
                                                <div className="product_price">
                                                    <strong className="pull-left">$49.99</strong>
                                                        <span className="pull-right line_through">$99.99</span>        
                                                </div>
                                                <div className="product_two_btn text-center">
                                                    <a id="ancbuy" onclick="addCourse(44, this)" style={{"cursor":"pointer"}} className="active">Buy Course</a>
                                                    <a onclick="addCourse(44, this)" style={{"cursor":"pointer;"}}>Add to Cart</a>
                                                </div>
                                                <div className="Have-a-coupon">
                                                    <span className="load-popover" data-toggle="popover" data-html="true" data-trigger="hover" data-placement="bottom" data-original-title="" title="">
                                                        Have a coupon?
                                                    </span>
                                                </div>
                                                <div className="includes_item">
                                                    <h6>Includes</h6>
                                                    <ul>
                                                        <li className="More_than">More than 66h video, theory and exercises</li>
                                                        <li className="Watch_on_any_device">Watch on any device</li>
                                                        <li className="Unlimited_access">Unlimited access for 8 months</li>
                                                        <li className="study_guide">Free workbook</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
            
                                        </div>
                                    </aside>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        carts: state.carts,
        proList:state.proData.proList,
        cateList:state.proData.cateList
    }
}
const CartsContext = connect(getValue,{fetchProList,fetchCateList})(Product)

module.exports = CartsContext;