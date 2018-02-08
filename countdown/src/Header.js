import React, { Component } from 'react';


class Header extends Component{
  constructor(props){
    super(props);
  }
  changeInput(input){
    this.setState({
      text: input
    });
  }
  addItem(input){
    var list = this.state.list;
    list.push(input);
    this.setState({
      list: list,
      text: ''
    })
    document.getElementById('input').value = '';
  }
  removeItem(input){
    var removed = this.state.removed;
    var list = this.state.list;
    var index = list.indexOf(input);
    list.splice(index,1);
    removed.push(input);
    this.setState({list: list, removed: removed});
    console.log(this.state);
  }
  changePage(){
    if(this.state.page !== 'removed'){
      this.setState({page: 'removed',button: 'Main Menu'});
      document.getElementById('araba').innerHTML =  this.showList(this.state.removed);
    }
    else{
      this.setState({page: 'list',button: 'Trash Box'});
      document.getElementById('araba').innerHTML = this.showList(this.state.list);
    }

  }
  showList(page){
    return(
        `<div>
          <li> ANANAS </li>
          <input type='button' value='X' onClick={() => this.removeItem(page)}/>
        </div>`
   );
  }
  render(){
    return(
      <div>
        <span> To Do List </span> <br />
        <input id='input' placeholder='To Do' onChange={(e) => (this.changeInput(e.target.value))}/>
        <input type='button' value='+' onClick={() => this.addItem(this.state.text)}/>
        <input type='button' value={this.state.button} onClick={() => this.changePage()}/>
        <Input />
      </div>
    )
  }
}
export default Header;