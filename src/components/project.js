import React, { Component} from 'react';



class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }


  render() {

      return (
                <span className="tab">{this.props.pname}</span>
    );
  }
}

export default Project;

