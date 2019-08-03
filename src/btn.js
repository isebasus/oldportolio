import React, { Component } from 'react';
import injectSheet from 'react-jss';
import {StyleSheet, Text, View,} from 'react-native';
import {render} from 'react-dom'
import LinearGradient  from 'react-linear-gradient-button';

const styles = {
    container: {
        flex: 1,
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
    },

}


const Button = ({classes, children}) => (
    <LinearGradient 
     colors={['#00F260', '#0575E6']}
     style = { styles.container }>
     
        <p className="gradientBtn">projects</p>
    </LinearGradient>
)

const StyledButton = injectSheet(styles)(Button)

export default StyledButton;
