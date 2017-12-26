import React  from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import store from './store/index'
import {increase,decrease,fetchList} from './actions/counter'
// 1.view
class Counter extends React.Component{

    componentWillMount(){
        this.props.fetchList();
    }

    render(){
        const {value,value1,lists,increase,decrease,fetchList} = this.props;
        var output = [];
        if(!lists.subjects){
            return <div>数据请求中...</div>
        }

        var output = [];
        for(let i=0;i<lists.subjects.length;i++){
            output.push(<li key={i}>{lists.subjects[i].title}</li>)
        }


        return (
            <div>
                <span>value：{value}</span>
                <br/>
                <span>value1：{value1}</span>
                <br/>
                {output}
                <br/>
                <button onClick={increase}>计数+1</button>
                <button onClick={decrease}>计数-1</button>
            </div>
        )
    }
}

// 4.mapStateToProps
const getValue = (state)=>{
    return {
        value: state.count,
        value1: state.count1,
        lists: state.lists
    }
}


// 容器组件
// 一句话总结：将所有的状态转成属性，将所有的分发转成属性，
// 并且通过connect连接将它们两者传递给视图组件，最终形成一个容器组件
const CounterContext = connect(getValue,{increase,decrease,fetchList})(Counter)

ReactDOM.render(
    <Provider store={store}>
        <CounterContext/>
    </Provider>,
    document.getElementById('app')
)