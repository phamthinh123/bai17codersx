import React, { Component } from 'react';
import "./Todos.css";
import Close from "../img/close.svg"
var classNames = require('classnames');

class Todos extends Component{
	render(){
		const { item, index, onClick, onClick2 }=this.props;

		return(

<div className={classNames("Todos",{
"isCompleted":item.isCompleted
})} >
<h4  onClick={onClick}>{index+1}. {item.title}</h4>
<img className="Close" onClick={onClick2} src={Close} width="34" height="34"/>
</div>
			)
	}
}
export default Todos