import {combineReducers} from 'redux';
import cart from './cart';
import counter from './counter';

const rootreducer=combineReducers({
cart,counter
});

export default rootreducer;