import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    headerS: {
        textAlign: 'left',
        fontSize: '45px',
    },
}

const header = ({ title }) => {
    return(
        <p style = { styles.headerS }>{title}</p>
    )
};

const Header = injectSheet(styles)(header)

export default Header;
