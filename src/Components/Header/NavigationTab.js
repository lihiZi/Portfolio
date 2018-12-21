import React from 'react';
import classes from './NavigationTab.css';
import ScrollableAnchor from 'react-scrollable-anchor';
/* scrollable anchor makes it possible to click icon and automatically been scrolled to 
relevnt area in webpage */
import Radium from 'radium';



const navigationTab = (props) => {
     const style = {
           gridArea: props.location,
           '@media (max-width: 830px)':{
                gridArea: "4/1/5/3",
                justifySelf: props.justify,
            },
      }
   
    return (
        <React.Fragment>
            <a href={props.hrf} style={style}>
                <img src = {props.image} alt="mmm" className={classes.star} style={style}/>
                <h1 style={{style, position:"sticky",top:"0",zIndex:"4",fontSize:"21px", justifySelf:"center",margin:"0"}}>{props.tabName}</h1>
                <div style={{style}}></div>            
            </a>
            <ScrollableAnchor id={props.anc}><div style={{gridArea:props.ancLoc}}></div></ScrollableAnchor>
        </React.Fragment>
    )   
};     
export default Radium(navigationTab); 

