import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let my = {firstName:'jh', secondName:'dou'};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {format(my)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

function format({ firstName, secondName }) {
  return `${firstName} ${secondName}`;
}

export default App;
