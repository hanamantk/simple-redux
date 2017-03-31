import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';
import Project from './project';


class MyContainer extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
          name : ''
  };
  
  this.enterProject=this.enterProject.bind(this);
  this.handleChange=this.handleChange.bind(this);
}
  
  handleChange(e){
     this.setState({name:e.target.value})

  }

enterProject(e){
  
  var code = (e.keyCode ? e.keyCode : e.which);
 
  if(code == 13 &&this.props.data.length<=6) {

   let project=this.state.name; 
   this.props.actions.addProject(project);
   this.setState({name: ''})
   
  }else if(code == 13 &&this.props.data.length >6){

    alert('--------------PROJECT IS STACK FULL------------')
  }

}
  render() {
        
        let projects=this.props.data;
        let pcount =projects.length;
           var proj= projects.map((project)=>{

                return <Project pname={project}/> 
            })
        
      return (
              <div className="container">
              <div className="project">
              <div className="tab-head">
                  <label>Add Project</label>
                  <input type="text" id="project" onKeyPress={this.enterProject} onChange={this.handleChange} value={this.state.name}  />
                
                <div className="rght">
                     <p>TOTAL</p>
                     <input type="text"  style={{'height':'40px','width':'70px'}} value={pcount+" projects"} />
                 </div>

                  </div>
                </div>
                <div style={{'clear':'both'}}></div>


                 <div className="column1">

                 <div className="proj-title">
                    <span className="task"> To do</span>
                    <div className="rght">
                        <input type="text" style={{'height':'40px','width':'90px'}} value={pcount+" projects"} />
                    </div>
                 </div>
                  {proj}
                  
                 </div>

                 <div className="column1">

                 <div className="proj-title">
                    <span className="task"> IN Progress</span>
                    <div className="rght">
                        <input type="text" style={{'height':'40px','width':'70px'}} value={"2 projects"} />
                    </div>
                 </div>
                  <span className="tab">project 7</span>
                  <span className="tab">project 8</span>
                  
                 </div>
                   
                   <div className="column1">

                 <div className="proj-title">
                    <span className="task"> Done</span>
                    <div className="rght">
                        <input type="text" style={{'height':'40px','width':'70px'}} value="2 projects" />
                    </div>
                 </div>
                  <span className="tab">project 9</span>
                  <span className="tab">project 10</span>
                  
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
