import React, { Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
      seconds :60,
      minites :10,
      user_ans:[] ,
      qnArray :'',
      qid     : false,
      data : this.props.data
    };
 
  this.radioChanged = this.radioChanged.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleRefresh = this.handleRefresh.bind(this); 

  }


 componentDidMount(){
   var self=this;
  self.intervalId = setInterval(function(){

    var newCount = (self.state.seconds) - 1;
    
    if(newCount >= 0) { 

      if(newCount === 0)    //decrease minnutes by 1 aftr 60 sec
      {

        var newMin = (self.state.minites) - 1;
        if(newMin === 0)
        {
          self.setState({ seconds: 0 ,minites : 0});
          alert("oops...time Up");
        }else{
           self.setState({ seconds: 60 ,minites : newMin});

        }

      }else{

        self.setState({ seconds: newCount });
      }

   } else {
       clearInterval(self.state.intervalId);
   }

  }, 1000);
  
  var lowEnd  = 1;
  var highEnd = 10;
  var arr     = [];

  while(lowEnd <= highEnd){
   arr.push(lowEnd++);
  }

   this.setState({ qnArray:arr}); 
 } 

 componentWillUnmount(){

  clearInterval(this.intervalId);
 }

optionList(option,Qid){   //generate option list for each question
  this.list=[];

    for (let key in option)
    {
             this.list.push(<li key={key}><input type="radio" key={key} name={Qid}  onChange={this.radioChanged.bind(this)}  value={option[key]} />{option[key]}</li>);
      }

return this.list;

}

handleRefresh(){
//this.setState({user_ans:newArray,qid:true});

}

 radioChanged(e){

var newQid=e.target.name;
var newAns=e.target.value;
var pair={Qid:newQid,ans:newAns};

var newArray = this.state.user_ans.slice();    
    newArray.push(pair);
 var idx=parseInt(newQid,10);   

 var index = this.state.qnArray.indexOf(idx);
 this.state.qnArray.splice(index,1);

if(newArray[0]!==undefined && newArray.length>=2 ){

  newArray.map((obj,i)=>{       //if option changed for same Qn select latest option

        if(obj.Qid===newQid && obj.ans!==newAns){
        newArray.splice(i,1);
        }    
  })


} 

this.setState({user_ans:newArray});
$('#'+newQid).css({ "background": ""});

}

handleSubmit(){



if(this.state.user_ans.length<10){

var arr=[];
for(let i=0;i<this.state.user_ans.length;i++){
        
      arr.push(parseInt(this.state.user_ans[i].Qid,10)); 
      
    }

var questionId=this.state.qnArray[0];

$('html, body').animate({
        scrollTop: $("#"+questionId).offset().top
    }, 400);

$('#'+questionId).css({ "background": "#FF5733"});



}else{


var right=0;
this.state.data.map((qn)=>{   //count right answers

    for(let i=0;i<this.state.user_ans.length;i++){
        if(qn.Qid==this.state.user_ans[i].Qid && qn.ans==this.state.user_ans[i].ans){
          right++; 
      }
    }

});

  document.cookie = "right="+right;
  $('#score').click();

}



}

  render() {
     
        this.key_val=[];


        let qestion=this.state.data.map((qn)=>{   //returns 1 question with options each time
            
             return <div className="question" key={qn.Qid}>
                      <span className="qn" id={qn.Qid}><span className="qid">{qn.Qid})</span>{qn.question}</span>
                    
                     <div className="option-list">
                       <ul>
                        {this.optionList(qn.opt,qn.Qid)}
                         
                        </ul>
                        
                      </div>

                    </div>;

          });
    
      return (
               <div className="container">
                    <header className="head">
                    Java Script Test
                    <span id="timer">Time {this.state.minites}: {this.state.seconds}  min</span>
                    </header>
                    <hr></hr>
                  
                  <div className="contenttest">
                   <div id="question-body">
                  
                   {qestion}
                   

                     <div className="buttons">
                    <ul>
                      <li> 
                      <button onClick={this.handleSubmit}>Submit</button>
                     </li>

                      <li><button onClick={this.handleRefresh}>Refresh</button></li>
                      </ul>
                   
                    </div>

                    </div>
                    </div >
                   <Link to={{ pathname: '/score',query:{}}}>
                      <button style={{"display":"none"}}  id="score" >Take Test</button>
                    </Link>
                   </div>

   
    );
  }
}


function mapStateToProps(state, props) {
  return {
    data: state.data
  };
}


export default connect(mapStateToProps)(Test);


