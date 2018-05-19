import {combineReducers} from 'redux';
import news from './news';
import products from './products';
import {routerReducer} from 'react-router-redux' // 将routerReducer一起和普通reducer进行合并操作

export default combineReducers({
    news,
    products,
    routing: routerReducer
})