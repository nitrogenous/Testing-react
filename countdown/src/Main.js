import React, { Component } from 'react';

class Main extends Component{
	constructor(){
		super();
		this.state = { div: 0}
	}
	render(){
		const t = this.state;
		function createDiv(){
			console.log(t.div);
			// <div id={t.div}>
				// <p> {document.getElementById('input').value} </p>
				// <input type='button' value='X'/>
			// </div>
		}
		return(
			<div>
				<input type='text' placeholder='new item' id='input'/>
				<input type='button' value='+' id='button' onClick={() => createDiv()}/>
			</div>
		);
	}
}
export default Main;
