import React, { forwardRef, useRef, useImperativeHandle, Component} from 'react';
import ProjectDescription from './components/description.jsx';
import StyledButton from './components/button.jsx';
import Header, {title} from './components/header.jsx';
import Container, {header} from './components/projectContainers.jsx';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

function App() {
  return (
    <Router history={createBrowserHistory}>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={"/portfolio"} component={Portfolio}></Route>
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
      <meta name="viewport" content="width=device-width, initial-scale=0.75" />
      <div className="container">
        <p className="first">Hello, i'm Sebastian.</p>
        <div className="links">
          <a id="palm">🌴</a>
          <a className="li" id="github" href="https://github.com/ZumbaMaster313">github</a>
          <a className="li" id="email" href="mailto: isebasus@gmail.com">email</a>
          <a className="li" id="portfolio" href="/portfolio">portfolio</a>
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

  toggleClick = () =>{
    this.props.history.push(`${this.props.match.path}/scraper`);
  }

  qwerty = () =>{
    this.props.history.push(`${this.props.match.path}/qwerty`);
  }

  isebas = () =>{
    this.props.history.push(`${this.props.match.path}/isebas`);
  }

  buttonClick = () => {
    this.props.history.push('/');
  }
 
  render(){
    return (
      <header className="portfolio">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="projects">
          <div className="title">
            <Header title="Portfolio"></Header>
            <StyledButton subject="Back to home page" click={this.buttonClick}></StyledButton>
            <h2 className="headerproject">Projects</h2>
            <p className="description">The following projects demonstrates what I have developed through the technologies I have used. You can also check out my github for more projects! 🌴</p>
          </div>
          <div className="positioning">
            <Container onClick={this.toggleClick} header="Video Scraper" caption="A web scraper that lets you search any video using Youtube's API."/>
            <Container onClick={this.qwerty} header="Qwerty" caption="A proxy server which allows the search of any website without the FBI seeing it."/>
            <Container onClick={this.isebas} header ="isebas.us" caption="This website of course. If you want, just look at the source code..."/>
          </div>
        </div>
        <Route path={`${this.props.match.path}/scraper`} component={VideoScraper}/>
        <Route path={`${this.props.match.path}/qwerty`} component={qwerty}/>
        <Route path={`${this.props.match.path}/isebas`} component={isebas}/>
        <Route 
          exact 
          path={this.props.match.path}
        />
      </header>
    );
  }
}

class VideoScraper extends React.Component{
  constructor(props){
    super(props);
  };

  homeClick = () => {
    this.props.history.push('/portfolio');
  }

  render(){
    return(
      <ProjectDescription onClick={this.homeClick} 
      caption="ThE BeSt SeaRch EnGinE" 
      title="Video Scraper"
      padding="130px"
      imageClass="scraperBackground"
      technology1="devicon-python-plain"
      technology2="devicon-html5-plain"
      technology3="devicon-javascript-plain"
      type1="Python"
      type2="HTML5/CSS"
      type3="JavaScript"
      gitLink="https://github.com/ZumbaMaster313/YoutubeWebScraper"
      ></ProjectDescription>
    )
  }
}

class qwerty extends React.Component{
  constructor(props){
    super(props);
  };

  homeClick = () => {
    this.props.history.push('/portfolio');
  }

  render(){
    return(
      <ProjectDescription onClick={this.homeClick} 
      caption="Web Proxy" 
      title="Qwerty"
      padding="167px"
      lineid="line"
      technology1="devicon-python-plain"
      technology2="devicon-html5-plain"
      type1="Python"
      type2="HTML5/CSS"
      imageClass="qwertyBackground"
      website="http://qwertyuiop.space"
      gitLink="https://github.com/ZumbaMaster313/qwertyuiop"
      button={<button className="link" id="component"><i class="fas fa-link"></i> Website</button>}
      ></ProjectDescription>
    )
  }
}

class isebas extends React.Component{
  constructor(props){
    super(props);
  };

  homeClick = () => {
    this.props.history.push('/portfolio');
  }

  render(){
    return(
      <ProjectDescription onClick={this.homeClick} 
      title="isebas.us" 
      caption="My Website"
      padding="170px"
      imageClass="isebasBackground"
      technology1="devicon-react-original"
      technology2="devicon-html5-plain"
      type1="React.js"
      type2="HTML5/CSS"
      website="https://isebas.us"
      gitLink="https://github.com/ZumbaMaster313/isebas.us"
      button={<button className="link" id="component"><i class="fas fa-link"></i> Website</button>}
      ></ProjectDescription>
    )
  }
}



export default App;
