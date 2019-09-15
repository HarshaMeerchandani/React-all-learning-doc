import React, { Component } from 'react'
import "./Employee1.css";
export default class Employee1 extends Component {
    render() {
        return (
            <div>
            <h2 className="myclass">
            {this.props.name},
            {this.props.age},
            {this.props.sal}
            </h2>
            </div>
        )
    }
}
