import React, {Component} from 'react';
import StyledButton from './components/btn.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
      </div>
    </Router>
  );
}

function Home(){
  return (
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
  )
}

function Portfolio(){
  return(
    <p>hello</p>
  )
}

export default App;
