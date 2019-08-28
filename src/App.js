import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet" ;
import welcome from './welcome'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        <h1>Hello world new</h1>
        <welcome />
          </header>
    </div>
  );
}

export default App;
