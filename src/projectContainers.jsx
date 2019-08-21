import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    box: {
        marginTop: '14.5%',
    },
    test: {
        textAlign: 'left',
        fontSize: '150px',
        fontWeight: '700'
    },
    '@media (max-width: 800px': {
        test:{
            fontSize: '7vw',
        }
    }
};

const container = ({ header }) => {
    return(
        <div style = { styles.box }>
            <p className="header">{ header }</p>
        </div>
    )
};

const Container = injectSheet(styles)(container);

export default Container;
