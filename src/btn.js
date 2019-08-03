import React, { Component } from 'react';
import injectSheet from 'react-jss';
import {render} from 'react-dom'
import GradientButton from 'react-linear-gradient-button';

const styles = {
    myButton: {
        color: 'green',
        margin: {
          // jss-expand gives more readable syntax
          top: 5, // jss-default-unit makes this 5px
          right: 0,
          bottom: 0,
          left: '1rem'
        },
        '& span': {
          // jss-nested applies this to a child span
          fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
        }
    },
    myLabel: {
        fontStyle: 'italic'
    }
}


const Button = ({classes, children}) => (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
)

const StyledButton = injectSheet(styles)(Button)

export default StyledButton;
