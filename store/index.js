import {createStore,applyMiddleware,compose} from 'redux'; // compose 是增强操作
import reducer from './../reducers/index'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import DevTools from './DevTools';

const loggerMiddleware  = createLogger();
const middleware  = [thunk,loggerMiddleware];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
)(createStore);

export default finalCreateStore;