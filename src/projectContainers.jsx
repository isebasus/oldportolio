import React, { Component } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";
import projectDescription from './description';


    const styles = {
        box: {
            borderRadius: '15px',
            textDecoration: 'none',
        },
        caption:{
            position: 'relative',
            textDecoration: 'none',
            textRendering: 'optimizeLegibility',
        },
        header: {
            position: 'relative',
            lineHeight: '90%',
            textDecoration: 'none',
            textRendering: 'auto',
        },
        button: {
            background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
            color: '#F1F1F1',
            borderRadius: '5px',
            border: '0px', 
            fontWeight: 700,
            userSelect: 'none',
            textDecoration: 'none',
            animation: 'show 1s infinite',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.2vw',
            verticalAlign: 'middle',
        },
        animation: {
            position: 'relative',
            textAlign: 'left',
            marginLeft: '43%',
        },
    };
        
const container = ({ header, caption, onClick}) => {
    return(
            <div className="projectcontainer" style = { styles.box }>
                <div style = { styles.header }>
                    <h1 className="header">{ header }</h1>
                </div>
                <div className="buttonlocation" style = { styles.animation }>
                    <button className="projectbutton" style = { styles.button } type="button" onClick={onClick}>
                        View Project
                    </button>
                </div>
                <p className="caption" style = {styles.caption}>
                    {caption}
                </p>
                <div style = { styles.animation }>
                    <button className="responsivebutton" style = { styles.button }type="button" onClick={onClick}>
                        View Project
                    </button>
                </div>
            </div>
        )
    };

const Container = injectSheet(styles)(container);

export default Container;
