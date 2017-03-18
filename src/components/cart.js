import React, { Component } from 'react';
import Shelf from './shelf';
import * as actions from '../actions/index';
import {connect }from 'react-redux';
import {bindActionCreators} from 'redux';

class Cart extends Component {

constructor(props){

	super(props);
	this.state={};
  this.removeItem=this.removeItem.bind(this);
	
}


removeItem(item){

this.props.actions.removeItem(item);
this.props.actions.decCounter();

}

  render() {

  	const cart_list=this.props.cart.map((item,index)=>{
  		return <li key={index}>{item}<button onClick={()=>this.removeItem(item)}>-</button></li>
  	});
    
    return (
      <div className="cart_list">
      
      <Shelf addItem={this.props.actions.addTocart}
             incCounter={this.props.actions.incCounter}/>

      <h2>cart itmes</h2>counter:{this.props.counter}
        <ol>
        {cart_list}
        </ol> 
      </div>
    );
  }
};


function mapStateToProps(state,props){
  return {
      cart:state.cart,
      counter:state.counter
  };

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
