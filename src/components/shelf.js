import React, { Component } from 'react';

class Shelf extends Component {

constructor(props){

	super(props);
	this.state={items:['tomato','mango','orrange','banana']};
	this.onAddItemToCart=this.onAddItemToCart.bind(this);
}

onAddItemToCart(item){

this.props.addItem(item);
this.props.incCounter();

}
  render() {

  	const items=this.state.items.map((item,index)=>{
  		return <li key={index}><button onClick={()=>this.onAddItemToCart(item)}>+</button>{item}</li>
  	});
    return (
      <div className="item_list">
      <h2>item list</h2>
        <ul>
        {items}
        </ul> 
      </div>
    );
  }
};



export default Shelf;
