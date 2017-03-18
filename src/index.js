import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './components/test';
import Score from './components/score'; 
import './index.css';
import {Provider} from 'react-redux';
import Store from './store';
import {Router,Route,browserHistory} from 'react-router';


const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
	
	<Router history={browserHistory} >
	 	<Route path='/' component={App}/>
	 	<Route path='/test' component={Test}/>
	 	<Route path='/score' component={Score}/>
	 </Router>
	 
 </Provider>,
 document.getElementById('root')
);

