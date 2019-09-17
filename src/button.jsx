import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Portfolio from '../App';
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
    button: {
        transition: 'transform .1s',
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        borderRadius: '100px',
        border: '0px', 
        fontWeight: '600',
        userSelect: 'none',
        textDecoration: 'none',
        animation: 'show 1s infinite',
        marginLeft: '10px',
        cursor: 'pointer',
    },
    animation: {
        textAlign: 'left',
    },
    '@keyframes zoom':{
        from: { 
            transform: 'translateY(7px)',
            opacity: 0.0,
            visibility: 'visible',
        },
        to: {
            transform: 'translateY(0px)',
            opacity: 1.0,
            visibility: 'visible',
        },
    },
    '@keyframes show':{
        from: {
          visibility: 'visible',
        },
        to: {
          visibility: 'visible',
        },
      },

}

class Button extends React.Component{
    constructor(props) {
        super(props);
    };

    click = () =>{
        this.props.parentMethod();
    }
    render(){
        return(
        <div className="buttoncontainer" style = { styles.animation }>
            <button className="homebutton" style = { styles.button } type="button" onClick={this.click}>
                Back to home page
            </button>
        </div>
        )
    }
}

const StyledButton = injectSheet(styles)(Button);

export default StyledButton; 
