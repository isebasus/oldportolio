import React, {Component} from 'react';
import StyledButton from './components/button.jsx';
import Header, {title} from './components/header.jsx';
import Container, {header} from './components/projectContainers.jsx';
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
              <Link className="button" to="portfolio">View Portfolio</Link>
            </button>
          </div>
      </div>
    </header>
  );
  }
}

function Portfolio() {
  return (
    <header className="portfolio">
      <div className="projects">
        <div className="title">
          <Header title="Portfolio"></Header>
          <StyledButton subject="Back to home page" link="/"></StyledButton>
          <h2 className="headerproject">Projects</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac nunc non nulla ornare tristique.</p>
        </div>
        <div className="positioning">
          <Container header="Qwerty" caption="A web proxy built for a more open web. Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Container>
          <Container header="Video Scraper" caption="A web scraper that uses Youtube's API to retrieve the video."></Container>
          <Container header ="isebas.us" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. That this is the most academical thing."></Container>
        </div>
      </div>
    </header>
  );
}
export default App;
