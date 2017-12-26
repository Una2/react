import React,{Component}  from 'react';
import {connect} from 'react-redux';
import { Button,Form,Table } from 'element-react';
import {Link} from "react-router";
import {addToCart,decToCart,remCart} from '../actions/counter'

import 'element-theme-default';

var _ = require('lodash');

class Carts extends Component{
    constructor(props) {
        super(props);
    }
    oonCurrentChange(){
        console.log(1111111111111111111111111)
    }
    render(){
        const {carts,addToCart,decToCart,remCart} = this.props;

        if(!carts){
            return(<div>数据请求中。。。。</div>)
        }
       
        var cartsList = _.uniqWith(carts,_.isEqual);
        var output = [];
        for(let i =0;i<cartsList.length;i++){
            output.push(
                <li key={i}>名称：{cartsList[i].title} 数量：{cartsList[i].quantity}</li>
            )
        }
        if(cartsList){
            var table=[];
            table.push(
                <Table
                style={{width: '100%'}}
                columns={[
                  
                    {label: "产品",prop: "name"},
                        {label: "缩略图",prop: "img",render:(row)=>{
                            return <img src={`http://localhost:3000/${row.img[0]}`} width="50" height="50" />
                        }},
                        {label:"单价",prop:"price"},
                        {label:"数量",prop:"count"},
                        {label: "合计",prop: "price",width: 180,render:(row)=>{
                            return row.price * row.count
                        }},
                        {label: "操作",prop: "zip",width:150,fixed: 'right',render: (row,column,index)=>{
                            return <span>
                            <Button onClick={()=>{addToCart(row)}} type="text" size="small">+</Button>&nbsp;&nbsp;
                            <Button onClick={()=>{decToCart(row)}} type="text" size="small">-</Button>&nbsp;&nbsp;
                            <Button type="text" size="small" onClick={()=>{remCart(row)}}>移除</Button></span>
                        }}]}
                data={cartsList}
                />
            )
        }
      
     return (
            <div>
               
            {table}
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        carts: state.reducer.carts
    }
}
const CartsContext = connect(getValue,{addToCart,remCart,decToCart})(Carts)

module.exports = CartsContext;