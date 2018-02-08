import React, { Component } from 'react';

class Inputs extends Component{
  addElements(){
    return (
      <div>
        <input id='input' placeholder='To Do' />
        <input type='button' value='Add' onClick={() => {
          this.props.addHandler(document.getElementById('input').value);
        }} />
        <input type='button' value={this.props.page} onClick={this.props.pageHandler} />
      </div>
    );
  }
  goBackElement() {
    return (
      <input type='button' value={this.props.page} onClick={this.props.pageHandler} />
    );
  }
  render(){
    return(
      <div>
      {
        this.props.page === 'list' ? this.addElements() : this.goBackElement()
      }
      </div>
    );
  }
}
export default Inputs;