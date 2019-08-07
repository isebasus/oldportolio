import React, {Component} from 'react';
import StyledButton from './btn';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="body">
        <div className="container">
          <p>
            <span className="first">Hello there.</span>
            <span className="second"> I'm a human named</span>
            <span className="third"> Sebastian.</span>
            <span className="fourth"> Nice to meet you.</span>
          </p>
          <StyledButton></StyledButton>
        </div>
      </header>
    </div>
  );
}

export default App;
