import React, { Component } from 'react';

class Main extends Component{
	constructor(){
		super();
		this.state = { div: 0}
	}
	render(){
		function createDiv(){
			<div id={this.state.div}>
			<p> {document.getElementById('input').value} </p>
			<input type='button' value='X'/>
			</div>
		}
		return(
			<div>
				<input type='text' placeholder='new item' id='input'/>
				<input type='button' value='+' id='button' onClick={() => createDiv}/>
			</div>
		);
	}
}
export default Main;
