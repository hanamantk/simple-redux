import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import {Link} from 'react-router';




class MyContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

    componentWillMount(){

    this.props.actions.getData('jk');

    }

  render() {
       
        let {data}=this.props;
        
        
      return (
              <div className="container">
                      <header className="head">
                       Test Your Skill 
                      </header>
                      <hr></hr>
                  
                  <div className="content">
                     <div className="test">
                        <input type="radio" name="lang" id="php"/>PHP<br/><br/>
                        <input type="radio" name="lang" id="jscript" />Java Script<br/><br/>
                        <Link to={{ pathname: '/test',query:{}}}>
                        <button >Take Test</button>
                      </Link>
                      </div>
                      <div className="right-box">
                       Time            : 10 min<br/>
                       Total Questions : 10
                  </div>
                  <marquee className="mark">This is  basic Quiz app built with react js and  redux  by- <i>Hanamant k</i> </marquee>
                  
                  </div>
                   
              </div>
    );
  }
};


function mapStateToProps(state, props) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
