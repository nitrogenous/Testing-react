import React, { Component } from 'react';


class Items extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      this.props.list.map((item) => 
        <div>
          <li> {item} </li>
          <input type='button' value='X' onClick={() => this.props.removeHandler(item)}/> 
        </div>
      )
    )
  }
}
export default Items;