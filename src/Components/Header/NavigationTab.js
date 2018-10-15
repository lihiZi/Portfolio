import React from 'react';
import classes from './NavigationTab.css';
import ScrollableAnchor from 'react-scrollable-anchor';



const navigationTab = (props) => {
   
   
    return (
        <React.Fragment>
            <a href={props.hrf}style={{gridArea:props.location}}>
                <img src = {props.image} alt="mmm" className={classes.star} style={{gridArea:props.location}}   />
                <h1 style={{gridArea:props.location, position:"sticky",top:"0",zIndex:"4",fontSize:"21px", justifySelf:"center",margin:"0"}}>{props.tabName}</h1>
                <div style={{gridArea:props.location}}></div>            
            </a>
        <ScrollableAnchor id={props.anc}><div style={{gridArea:props.ancLoc}}></div></ScrollableAnchor>
        </React.Fragment>
    )
    
};  
   
export default navigationTab; 

