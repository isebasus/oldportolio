import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
    button: {
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        padding: '1.5rem 2rem',
        borderRadius: '100px',
        border: '0px', 
        fontSize: '30px',
        fontWeight: 700,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',

    },
    buttonAnimation: {
        animation: 'fade_up 1s ease-in forwards',
        animationDelay: '3.8s',
        visibility: 'hidden',
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

}


const Button = ({ Component }) => {
    return(
        <div style = { styles.buttonAnimation }>
                <button className="font" style = { styles.button } type="button" to="/portfolio">
                    View Portfolio
                </button>
        </div>
    )
}

const StyledButton = injectSheet(styles)(Button)

export default StyledButton;
