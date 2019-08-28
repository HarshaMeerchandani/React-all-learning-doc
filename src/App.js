import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./Greet" ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        <h1>Hello world new</h1>
          </header>
    </div>
  );
}

export default App;
