import React, { Component } from 'react'

export default class Addition extends Component {
    constructor(){
        super();
        this.state = {
            a:10,
            b:2
        }
    }
   
    render() {
        return (
            <div>
             first number: { this.state.a } 
           second number: { this.state.b } 
           sum: {this.state.a+ this.state.b}     
            </div>
        )
    }
}
