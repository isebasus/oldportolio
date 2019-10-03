import React, { Component, forwardRef, useRef, useImperativeHandle  } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
    overlay: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 100,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
        overflowY: 'auto',
        display: 'flex'
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
        paddingTop: '0px',
        marginTop: '24px',
        marginleft: '0',
        paddingRight: '12px',
        position: 'relative',
    },
    description: {
        color: 'black',
        textAlign: 'left',
        marginLeft: '33px',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '21px',
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
        textAlign: 'left',
        paddingTop: '7px',
    },
    header: {
        color: 'black',
        fontWeight: '500',
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


const description = ({
    onClick, title, caption, button, imageClass, padding, gitLink, website,
    technology1, technology2, technology3, technology4, technology5,
    type1, type2, type3, type4, type5,
    }) =>  {


    return(
        <div id="overlay" style = {styles.overlay}>
            <div id="togglebox" style = {{ paddingBottom: `${padding}`, animation: 'fade_in 0.25s'}}>
                <div style = {styles.image} className={imageClass}>
                    <div style = {styles.cover}>
                        <div style = {styles.wrapper}>
                            <div style = {styles.location}>
                                <button style = {styles.button} onClick={onClick}>
                                <i href="#" className="fa fa-close"></i> Close
                                </button>
                            </div>
                            <p className="descriptionTitle" style = {styles.title}>{ title }</p>
                            <p className="bio" style = {styles.bio}>{caption}</p>
                        </div>
                    </div>
                </div>
                <div  id="leftdiv" className="dcontainer" style = {styles.container}>
                    <h3 style = {styles.description} className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales placerat lacus in efficitur. Mauris eu libero dictum, elementum mi id, ultrices mauris. Proin tincidunt, eros id feugiat efficitur, nibh ma. Proin tincidunt, eros id feugiat efficitur, nibh ma.</h3>
                    <h3 style = {styles.description} className="projectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales placerat lacus in efficitur. Mauris eu libero dictum, elementum mi id, ultrices mauris. Proin tincidunt, eros id feugiat efficitur, nibh magna ornare massa, non pellentesque mauris diam ac justo.</h3>
                    <h3 style = {styles.description} className="projectDescription">Nunc sed neque id mi posuere tempus eget eget turpis. Aenean et erat imperdiet, luctus eros non, aliquet sem. Maecenas eu ex molestie, tempor risus non, posuere orci. Aenean imperdiet eros eu ligula ullamcorper ullamcorper. Nullam sed fringilla elit. Etiam facilisis id lectus.</h3>
                    <h3 style = {styles.description} className="projectDescription"></h3>
                    <h3 style = {styles.description} className="projectDescription"></h3>
                </div>
                <div id="line" style = {styles.line}>
                </div>
                <div className="right" style = {styles.right} id="rightdiv">
                    <h3 style = {styles.header}>Technologies</h3>
                    <h3 style = {styles.technology}><i class={technology1}></i> {type1}</h3>
                    <h3 style = {styles.technology}><i class={technology2}></i> {type2}</h3>
                    <h3 style = {styles.technology}><i class={technology3}></i> {type3}</h3>
                    <h3 style = {styles.technology}><i class={technology4}></i> {type4}</h3>
                    <h3 style = {styles.technology}><i class={technology5}></i> {type5}</h3>
                    <h3 style = {styles.header}>Links</h3>
                    <a href={gitLink}>
                        <button className="link"style={styles.link}><i class="fas fa-link"></i> Github</button>
                    </a> 
                    <a href={website}>
                        {button}
                    </a>
                    
                </div>
            </div>
        </div>
    )
};

const ProjectDescription = injectSheet(styles)(description);

export default ProjectDescription;
