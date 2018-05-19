import React  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import finalCreateStore from './store/index';
import reducer from './reducers/index'
import { Router,Route,hashHistory,IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './store/DevTools';

import App from './modules/App';
import HomeContext from './modules/Home';
import NewsContext from './modules/News';
import NewDetailContext from './modules/NewDetail';
import productsContext from './modules/Products';
import CartsContext from './modules/Carts';
import LoginContext from './modules/login';
import ResignContext from './modules/resign';

const store = finalCreateStore(reducer);
const history = syncHistoryWithStore(hashHistory,store); 

ReactDOM.render(  
        <Provider store={store}>      
            <div>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomeContext}/>
                        <Route path="/news" component={NewsContext}/>
                        <Route path="/newDetail/:_id" component={NewDetailContext}/>
                        <Route path="/products" component={productsContext}/>
                        <Route path="/carts" component={CartsContext}/>
                        <Route path="/login" component={LoginContext}/>
                        <Route path="/resign" component={ResignContext}/>
                    </Route>
                </Router>
                <DevTools/>
            </div>               
        </Provider>  
    ,
    document.getElementById('app')
)