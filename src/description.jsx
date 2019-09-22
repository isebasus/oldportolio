import React, { Component } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
    overlay: {
        position: 'fixed',
        display: 'flex',
        width: '100%',
        height: '100%',
        zIndex: 100,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
        overflowY: 'auto',
    },
    box: {
        position: 'relative',
        borderRadius: '7px',
        textDecoration: 'none',
        backgroundColor: '#F1F1F1',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        paddingBottom: '45px',
        animation: 'fade_in 0.6s', 

    },
    image: {
        position: 'relative',
        width: '100%',
        height: '250px',
        marginTop: '-2px',
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        backgroundSize: 'cover',
    },
    cover: {
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        background: 'rgba(0, 7, 12, 0.75)',
        width: '100%',
        height: '250px',
        display: 'grid',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: '#F1F1F1',
        fontWeight: 600,
        fontSize: '35px',
    },
    wrapper: {
        marginTop: '100px',
        textAlign: 'center'
    },
    bio : {
        marginTop: '-70px',
        paddingTop: '-px',
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#F1F1F1 ',
    },
    project: {
        color: 'black',
        fontWeight: 'normal',
        textAlign: 'left'
    },
    container: {
        paddingTop: '10px',
        marginleft: '0',
        position: 'relative'
    },
    description: {
        color: 'black',
        textAlign: 'left',
        marginLeft: '33px',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '21px'
    },
    location: {
        position: 'relative',
    },
    button:{
        position: 'absolute',
        top: -100,
        right: 0,
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        borderRadius: '7px',
        border: '0px', 
        fontWeight: 700,
        userSelect: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        borderTopRightRadius: '7px',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        padding: '1rem 1.0rem',
    },
    line: {
        backgroundColor: 'black',
        opacity: '0.5',
    },
    right: {
        position: 'relative',
        height: '280px',
        textAlign: 'left',
        paddingTop: '10px',
    },
    header: {
        color: 'black',
        fontWeight: '700',
        fontSize: '16px',
        textAlign: 'left'

    },
    link: {
        cursor: 'pointer',
        position: 'absolute',
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        color: '#F1F1F1',
        borderRadius: '7px',
        border: '0px', 
        fontWeight: 700,
        userSelect: 'none',
        fontSize: '15px',
        textDecoration: 'none',
        letterSpacing: '2px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        padding: '1rem 1.0rem',
        fontSize: '13px',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    },
    technology: {
        color: 'black',
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '21px'
    },
    '@keyframes fade_in':{
        from: { 
            transform: 'scale(0.98)',
            opacity: 0.0,
        },
        to: {
            transform: 'scale(1.0)',
            opacity: 1.0,
        },
    },
    '@keyframes zoom':{
        from: { 
            transform: 'translateY(7px)',
            opacity: 1.0,
            visibility: 'visible',
        },
        to: {
            transform: 'translateY(0px)',
            opacity: 1.0,
            visibility: 'visible',
        },
    },


};

class description extends React.Component {
    constructor(props) {
        super(props);
    };

    click = () =>{
        this.props.exit();
    }
    render(){
    return(
        <div className="overlay" style = {styles.overlay}>
            <div style = {styles.box}>
                <div style = {styles.image} className="scraperBackground">
                    <div style = {styles.cover}>
                        <div style = {styles.wrapper}>
                            <div style = {styles.location}>
                                <button style = {styles.button} onClick = {this.click}>
                                <i href="#" className="fa fa-close"></i> Close
                                </button>
                            </div>
                            <p className="descriptionTitle" style = {styles.title}>Video Scraper</p>
                            <p className="bio" style = {styles.bio}>ThE BEst SeArCh EngIne</p>
                        </div>
                    </div>
                </div>
                <div  className="dcontainer" style = {styles.container}>
                    <h3 style = {styles.description} className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales placerat lacus in efficitur. Mauris eu libero dictum, elementum mi id, ultrices mauris. Proin tincidunt, eros id feugiat efficitur, nibh ma. Proin tincidunt, eros id feugiat efficitur, nibh ma.</h3>
                    <h3 style = {styles.description} className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales placerat lacus in efficitur. Mauris eu libero dictum, elementum mi id, ultrices mauris. Proin tincidunt, eros id feugiat efficitur, nibh magna ornare massa, non pellentesque mauris diam ac justo.</h3>
                    <h3 style = {styles.description} className="projectDescription">Nunc sed neque id mi posuere tempus eget eget turpis. Aenean et erat imperdiet, luctus eros non, aliquet sem. Maecenas eu ex molestie, tempor risus non, posuere orci. Aenean imperdiet eros eu ligula ullamcorper ullamcorper. Nullam sed fringilla elit. Etiam facilisis id lectus.</h3>
                </div>
                <div className="line"style = {styles.line}>
                </div>
                <div className="right" style = {styles.right}>
                    <h3 style = {styles.header}>Technologies</h3>
                    <h3 style = {styles.technology}><i class="devicon-python-plain"></i> Python</h3>
                    <h3 style = {styles.technology}><i class="devicon-html5-plain"></i> HTML5/CSS3</h3>
                    <h3 style = {styles.technology}><i class="devicon-javascript-plain"></i> JavaScript</h3>
                    <h3 style = {styles.header}>Links</h3>
                    <a href="https://github.com/ZumbaMaster313/YoutubeWebScraper">
                        <button className="link"style={styles.link}><i class="fas fa-link"></i> Github</button>
                    </a> 
                </div>
            </div>
        </div>
    )}
};

const ProjectDescription = injectSheet(styles)(description);

export default ProjectDescription;
