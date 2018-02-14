import React, { Component } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Items from './components/Items';

class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			headerText: 'To Do',
	    	list: [],
      		removed: [],
      		page: 'list'
		}
	}
	render(){
		return (
			<div>
				<Header headerText={this.state.headerText} />
				<Inputs page={this.state.page} addHandler={this.addItem.bind(this)} pageHandler={this.changePage.bind(this)}/>
				<Items list={this.state.page === 'list' ? this.state.list : this.state.removed} removeHandler={this.removeItem.bind(this)} />
			</div>
		);
	}
	addItem(item) {
		let list = this.state.list;
	    list.push(item);
	    this.setState({
		    list: list,
	      	text: ''
	    });
	}
	removeItem(item) {	 
		var removed = this.state.removed;
    	var list = this.state.list;
    	var index = list.indexOf(item);
    	list.splice(index,1);
    	removed.push(item);
    	this.setState({list: list, removed: removed});
	}
	changePage() {
		this.state.page === 'list' ? this.setState({page: 'removed'}) : this.setState({page: 'list'}); 
	}
}

export default App;