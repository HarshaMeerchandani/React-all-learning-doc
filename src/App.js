import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet" ;
import Welcome from './Welcome';
import Hello from "./Hello.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        <h1>Hello world new</h1>
        <Welcome />
        <Hello/>
        <Hello a="10"/>
        <Hello b="10"/>
        <Hello name="Harsha123"/>

          </header>
    </div>
  );
}

export default App;
