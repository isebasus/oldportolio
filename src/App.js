import React, {Component} from 'react';
import StyledButton from './components/btn.jsx';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import { tsConstructorType } from '@babel/types';

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={"/portfolio"} component={Portfolio}/>
        </Switch>
      </div>
    </Router>
  );
}

class Home extends React.Component{

  render(){
  return (
    <header className="body">
      <div className="container">
        <p>
          <span className="first">Hello there.</span>
          <span className="second"> I'm a human named</span>
          <span className="third"> Sebastian.</span>
          <span className="fourth"> Nice to meet you.</span>
        </p>
          <div className="buttonAnimation">
            <button className="wrapper" type="button">
              <Link className="button" to="portfolio">view portfolio</Link>
            </button>
          </div>
      </div>
    </header>
  );
  }
}

function Portfolio() {
  return (
    
  );
}
export default App;
