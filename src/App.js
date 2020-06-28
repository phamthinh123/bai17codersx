import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Sad from "./img/sad.svg";
import Mod from "./components/Mod";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Todos:[
{title:"College",isCompleted:false}, 
{title:"Workout",isCompleted:false}, 
{title:"Working On Project",isCompleted:false}, 
{title:"Doing Homework",isCompleted:false}, 
{title:"Learn",isCompleted:false}, 
{title:"Phone My Mom",isCompleted:false}, 
{title:"Read A Book",isCompleted:false}
      ],
      showModal: false,
      value:""
    }
    
  
        this.close=this.close.bind(this);
    this.open=this.open.bind(this)
    this.onChange=this.onChange.bind(this)
    this.onKeyUp=this.onKeyUp.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }
changeState(item){
  const index=this.state.Todos.indexOf(item);
  return evt => {
    
    this.setState({
      Todos:[
      ...this.state.Todos.slice(0,index),
      {
        ...item,
        isCompleted:!this.state.Todos[index].isCompleted
      },
      ...this.state.Todos.slice(index+1)
      ]
    })
  }
}
delete(item){
  return evt =>{
      const index=this.state.Todos.indexOf(item);
      this.setState({
        Todos:[
        ...this.state.Todos.slice(0,index),
      
      ...this.state.Todos.slice(index+1)
        ]
      })
  }
}
  close() {
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }
  onChange(evt){
    this.setState({
        value:evt.target.value
    })

  }
    onSubmit(){
console.log(this.state.value)
let text=this.state.value;

if(!text){
        return
      }
      text.trim();
      if(!text){
        return
      }
        this.setState({
       Todos:[
       ...this.state.Todos,
       {
        title:text,
        isCompleted:false
       }
       ],
        value:""
    })  
  }

  onKeyUp(evt){
    if(evt.keyCode===13){
      let text=evt.target.value;
      if(!text){
        return
      }
      text.trim();
      if(!text){
        return
      }
        this.setState({
       Todos:[
       ...this.state.Todos,
       {
        title:text,
        isCompleted:false
       }

       ],
        value:""
    })
    }
  }
  render(){
  const { showModal, value}=this.state;
    let arr=this.state.Todos.filter(item =>
      item.isCompleted===false);
    let arr2=this.state.Todos.filter(item =>
      item.isCompleted===true);
    if(this.state.Todos.length){
     
    return(

<div className="App">
<h1>DAILIST</h1>
<h3>Upcoming</h3>
{
      arr.map((item,index) => 
    <Todos item={item} index={index} onClick={this.changeState(item)} onClick2={this.delete(item)}/>
)}
      <h3>Finished</h3>
{
      arr2.map((item,index) => 
    <Todos item={item} index={index} onClick={this.changeState(item)} onClick2={this.delete(item)} />
)}
<Mod showModal={showModal} close={this.close} open={this.open} onChange={this.onChange} value={value} onKeyUp={this.onKeyUp} onClick3={this.onSubmit}/>
</div>
      )
  }
  else{
    return(

<div className="App">
<h1>DAILIST</h1>
<div className="h4title">
<h4>Seems like</h4>
<h4>You have no list</h4>
</div>
<img className="Sad" src={Sad} width="200" height="200"/>

</div>
      )
  }
  }
}
export default App;
