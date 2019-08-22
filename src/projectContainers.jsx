import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    box: {
        marginTop: '14.5%',
    },
    caption:{
        marginTop: '-75px',
    },
    header: {
        marginLeft: 0,
    }
};

const container = ({ header, caption}) => {
    return(
        <div style = { styles.box }>
            <div style = { styles.header }>
                <p className="header">{ header }</p>
            </div>
            <div className="caption" style = {styles.caption}>
                {caption}
            </div>
        </div>
    )
};

const Container = injectSheet(styles)(container);

export default Container;
