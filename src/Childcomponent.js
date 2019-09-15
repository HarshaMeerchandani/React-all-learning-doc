import React from 'react';
import './Employee1.css';
class Employee1 extends React.Component{

render(){
return (
  <div className="myclass">
Name : {this.props.name} kumar<br />
Age : {this.props.age} <br/>
Salary : {this.props.sal} <hr/>
  </div>
)
// return React.createElement('h1',null,'Mohan kumar')
// return React.createElement('div',null,'Mohan kumar')

// return React.createElement('div',null,React.createElement('h2',{className : 'myclass'},'Mohan kumar'))
}

}

export default Employee1;