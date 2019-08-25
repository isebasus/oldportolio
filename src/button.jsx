import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

const styles = {
    button: {
        transition: 'transform .1s',
        visibility: 'hidden',
    },
    home:{
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        borderRadius: '100px',
        border: '0px', 
        fontWeight: 700,
        userSelect: 'none',
        textDecoration: 'none',
        animation: 'show 1s infinite',
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


const Button = ({ subject, link }) => {
    return(
        <div className="buttoncontainer" style = { styles.animation }>
            <button style = { styles.button }type="button">
                <Link className="homebutton" style = { styles.home }to={ link }>{ subject }</Link>
            </button>
        </div>
    )
}

const StyledButton = injectSheet(styles)(Button)

export default StyledButton; 
