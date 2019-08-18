import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    box: {
        top: '100px',
        width: '450px',
        height: '300px',
        background:'white',
        borderRadius: '10px',
        margin: '40px 0px',
    },
};

const container = ({}) => {
    return(
        <div style = { styles.box }>
            <p>helllleo</p>
        </div>
    )
};

const Container = injectSheet(styles)(container);

export default Container;
