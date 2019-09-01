import React, {Component} from 'react';
import StyledButton from './components/button.jsx';
import Header, {title} from './components/header.jsx';
import Container, {header} from './components/projectContainers.jsx';
import { HashRouter as Router, Route, Switch, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

function App() {
  return (
    <Router history={createBrowserHistory}>
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
  handleClick = () => {
    this.props.history.push('/portfolio')
  }

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
            <button className="button" type="button" onClick={this.handleClick}>
              View Portfolio
            </button>
          </div>
      </div>
    </header>
  );
  }
}

export class Portfolio extends React.Component{
  constructor(props){
    super(props);
  };

  buttonClick = () => {
    this.props.history.push('/')
  }

  render(){
    return (
      <header className="portfolio">
        <div className="projects">
          <div className="title">
            <Header title="Portfolio"></Header>
            <StyledButton subject="Back to home page" parentMethod={this.buttonClick}>{this.props.children}</StyledButton>
            <h2 className="headerproject">Projects</h2>
            <p className="description">The following projects demonstrates the skills that I have performed through the technologies that I have used. You can also check out my github for more projects!</p>
          </div>
          <div className="positioning">
            <Container header="Video Scraper" caption="A web proxy built for a more open web. Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Container>
            <Container header="Qwerty" caption="A web scraper that uses Youtube's API to retrieve the video."></Container>
            <Container header ="isebas.us" caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. That this is the most academical thing."></Container>
          </div>
        </div>
      </header>
    );
  }
}


export default App;
