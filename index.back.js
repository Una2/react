import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware  } from 'redux';
import fetch from 'isomorphic-fetch'
import fetchReducer from './reducers/fetchReducer';


const store = createStore(fetchReducer,applyMiddleware(thunk));


const getData = postTitle => (dispatch,getState)=>{
    console.log(postTitle)
    // ajax请求第一步，其实返回的就是status数据请求中
    dispatch({
        type: postTitle + "_START" // postTitle->FETCH_DATA
    })

    // 第二步，ajax请求
    fetch('/api/v2/movie/top250')
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        dispatch({
            type: postTitle + "_FINISH",
            payload: json
        })
    })

}


class SampleComp extends React.Component {
    fetchData(){
        this.props.dispatch(getData('FETCH_DATA'))
    }
    render(){
        
        let list = [];
        if(this.props.data.list){
            list = this.props.data.list.subjects.map(function(item,idx){
                return <li key={idx}>{item.title}</li>
            })
        }


        return (
            <div>
                {this.props.data.status}
               <ul>
               {list}
               </ul>
               <button onClick={this.fetchData.bind(this)}>请求数据</button>
            </div>
        )
    }
}

function renderIt(){
    ReactDOM.render(
    <SampleComp data={store.getState()} dispatch={(arg)=>{store.dispatch(arg)} }/>,
    document.getElementById('app'));
}
renderIt();

store.subscribe(renderIt);
