import React,{Component}  from 'react';
import {connect} from 'react-redux';
import {increase,decrease,fetchList,addToCart} from '../actions/counter'


class Counter extends Component{
    componentWillMount(){
        this.props.fetchList();
    }

    changePage(e){
        const page = e.target.getAttribute('data-page');
        const params = {page: parseInt(page)}
        this.props.fetchList(params)
    }

    addCart(e){
        const idx = e.target.getAttribute('data-idx');
        const addToCartProduct = this.props.lists.subjects[idx];
        this.props.addToCart(addToCartProduct)
    }

    render(){
        const {value,value1,lists,carts,increase,decrease,fetchList,addToCart} = this.props;
        var output = [];
        if(!lists.subjects){
            return <div>数据请求中...</div>
        }

        var output = [];
        var outputPages = [];
        var pages = 1;
        pages = Math.ceil(lists.total/20);
        for(let i=1; i<=pages;i++){
            outputPages.push(
                <li><a href="javascript:void(0)" onClick={ (e)=>this.changePage(e) } data-page={i} key={i}>{i}</a></li>
            )
        }

        for(let i=0;i<lists.subjects.length;i++){
            output.push(<li key={i}>
                {lists.subjects[i].title}
                <a className="btn btn-primary" role="button" href="javascript:void(0)" data-idx={i}  onClick={ (e)=> {this.addCart(e)} }>加入购物车</a>
                </li>)
        }


        return (
            <div>
                <span>value：{value}</span>
                <br/>
                <span>value1：{value1}</span>
                <br/>
                <nav aria-label="...">
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </nav>
                <br/>
                {output}
                <br/>
                <button onClick={increase}>计数+1</button>
                <button onClick={decrease}>计数-1</button>
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        value: state.reducer.count,
        value1: state.reducer.count1,
        lists: state.reducer.lists
    }
}
const CounterContext = connect(getValue,{increase,decrease,fetchList,addToCart})(Counter)


module.exports = CounterContext;