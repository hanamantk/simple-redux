import React, { Component} from 'react';
import {Link} from 'react-router';


class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      selected:false
    };
  }


  render() {
     var cookie     = document.cookie;
     var arr        = cookie.split('=');
     var rightCount = arr[1];
     var rightAns   = rightCount ;
     var wrongAns   = (10-rightAns) ;
     var score      = (rightCount*100)/10;

      return (
               <div className="container">
                    <header className="head">
                   Your Score
                    </header>
                    <hr></hr>
                  
                  <div className="score">
                   <ul><li>Questions :10</li>
                   <li>correct  Ans :{rightAns} </li>
                   <li>Wrong    Ans  :{wrongAns} </li><li></li>
                   <li className="scoreFont">Your    Score :{score+'%'} </li>
                   <li><Link to={{ pathname: '/'}}>
                      <button >Back to Home</button>
                    </Link></li>
                    </ul>

                </div>
                
             </div>
          
   
    );
  }
}

export default Score;

