import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet" ;
import Welcome from './Welcome';
import Hello from "./Hello.js";
import Employee1 from './Employee1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        {/* child componrnt */}
        <Employee1 /> 
        <Employee1 />
        <Employee1 />
        <h1>Hello world new</h1>
        <Welcome />
        <Welcome name="Harsha Meer" />
        <Welcome marks="34"/>
        <Hello/>
        <Hello a="10"/>
        <Hello b="10"/>
          </header>
    </div>
  );
}

export default App;
