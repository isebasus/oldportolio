import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    button: {
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        padding: '1.5rem 2rem',
        borderRadius: '13px',
        border: '0px', 
        fontSize: '30px',
        fontWeight: 700,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        animation: 'zoom 1s ease-in forwards',
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
        }
    }

}


const Button = ({classes, children}) => {
    return(
        <div style = { styles.buttonLocation }>
            <input className="font" style = { styles.button } value="View Projects" type="button"></input>
        </div>
    )
}

const StyledButton = injectSheet(styles)(Button)

export default StyledButton;
