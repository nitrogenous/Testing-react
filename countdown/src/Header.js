import React, { Component } from 'react';


class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      list: [],
      removed: []
    };
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
  render(){
    return(
      <div>
        <span> To Do List </span> <br />
        <input id='input' placeholder='To Do' onChange={(e) => (this.changeInput(e.target.value))}/>
        <input type='button' value='+' onClick={() => this.addItem(this.state.text)}/>
        <input type='button' value={this.props.page} />
        {this.state.list.map((item) => 
          <div>
          <li> {item} </li>
          <input type='button' value='X' onClick={() => this.removeItem(item)}/>
          </div>
          )}
      </div>
    )
  }
}
export default Header;