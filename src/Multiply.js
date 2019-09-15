import React, { Component } from 'react'

export default class Multiply extends Component {
   constructor(){
    super();
    this.state={
        a:4,
        b:3
    }
   }
   render(){
    return (
      <div>
    <p>
    First No : <input type="text" value={this.state.a} name="first_num" id="first_num" />
    </p>
    <p>
    Second No : <input type="text" value={this.state.b} name="second_num" id="sevcond_num" />
    </p>
    <p>
    The Multiply is {this.state.a*this.state.b}
    
    </p>
      </div>
    )
    }
}
