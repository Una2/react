import React  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import finalCreateStore from './store/index';
import reducer from './reducers/index'
import { Router,Route,hashHistory,IndexRoute,Link} from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux'; // sync History with store

import DevTools from './store/DevTools';

import App from './modules/App'
import About from './modules/About'
import HomeContext from './modules/Home'
import CounterContext from './modules/Counter'
import CartsContext from './modules/Carts'
import NewsContext from './modules/News'
import proContext from './modules/Product'
import comContext from './modules/comment'

const store = finalCreateStore(reducer);
const history = syncHistoryWithStore(hashHistory,store); 



ReactDOM.render(
   
        <Provider store={store}>
             <div>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomeContext}/>
                        <Route path="/about" component={About}/>
                        <Route path="/counter" component={CounterContext}/>
                        <Route path="/counter/:id" component={CounterContext}/>
                        <Route path="/carts" component={CartsContext}/>
                        <Route path="/newsList" component={NewsContext}/>
                        <Route path="/product" component={proContext}/> 
                        <Route path="/comment" component={comContext}/>
                       
                    </Route>
                </Router>
                <DevTools/>
            </div>
        </Provider>
   
    ,
    document.getElementById('app')
)