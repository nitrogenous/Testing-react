import React, { Component } from 'react';

class Inputs extends Component{
  addElements(){
    const text = this.props.page.charAt(0).toUpperCase() + this.props.page.slice(1);
    return (
      <div>
        <input id='input' placeholder='To Do' />
        <input type='button' value='Add' onClick={() => {
          this.props.addHandler(document.getElementById('input').value);
        }} />
        <input type='button' value={text} onClick={this.props.pageHandler} />
      </div>
    );
  }
  goBackElement() {
    const text = this.props.page.charAt(0).toUpperCase() + this.props.page.slice(1);
    return (
      <input type='button' value={text} onClick={this.props.pageHandler} />
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