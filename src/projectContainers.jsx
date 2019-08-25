import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    box: {
        marginTop: '16%',
        borderRadius: '15px',
    },
    caption:{
        position: 'relative'
    },
    header: {
        position: 'relative',
        lineHeight: '90%',
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
        padding: '1vw 1.5vw',
        fontSize: '.84vw',
        letterSpacing: '0.2vw',
        display: 'incline-block',
        verticalAlign: 'middle'
    },
    animation: {

        textAlign: 'left',
        position: 'relative',
        marginLeft: '500px'
    },
    positioning: {

    }

};

const container = ({ header, caption}) => {
    return(
            <div style = { styles.box }>
                <div style = { styles.header }>
                    <h1 className="header">{ header }</h1>
                </div>
                <div style = { styles.positioning }>
                    <div style = { styles.animation }>
                        <button style = { styles.button }type="button">
                        View Project
                        </button>
                    </div>
                    <p className="caption" style = {styles.caption}>
                        {caption}
                    </p>
                </div>
            </div>
    )
};

const Container = injectSheet(styles)(container);

export default Container;
