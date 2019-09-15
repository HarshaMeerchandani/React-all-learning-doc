import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet" ;
import Hello from "./Hello.js";
import Employee1 from './Employee1';
import Company from './Company';
import Addition from "./Addition"
import Multiply from './Multiply';
import Welcome from "./Welcome";
function App() {
// name,age and sal is the properties of component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        <Company/>
        <Welcome/>
       <Addition/>
       <Multiply/>
        
        <Employee1 name="rohan" age="23" sal="300"/> 
        <Employee1 name="sohan" age="34" sal="400"/>
        <Employee1 name="jag" age="34" sal="500"/>
        <h1>Hello world new</h1>
        
        <Hello/>
        <Hello a="10"/>
        <Hello b="10"/>
          </header>
    </div>
  );
}

export default App;
