import React from 'react';
import classes from './Header.css';
import NavigatioTab from './NavigationTab';
import Radium from'radium';

const header = () => {
    return(
   
        <React.Fragment>
       
        <p className = {classes.name}>Lihi Zig<span>e</span>r,</p>
        <p className = {classes.title}>Web D<span>e</span>velop<span>e</span>r</p>
        <NavigatioTab hrf='#projects' anc='projects' ancLoc="17/1/18/3" image={require("../../Assets/laptop.png")}  aLocation="5/7/6/9" location = "5/9/6/10" location2 = "5/10/6/11" tabName="Projects"/>
        <NavigatioTab hrf="#skills" anc='skills'ancLoc="10/8/11/10" image={require("../../Assets/tools.png")} aLocation="4/9/5/11" location = "4/10/5/11" location2 = "4/9/5/11" tabName="Skills"/>
        <NavigatioTab hrf="#about" anc='about' ancLoc="10/1/11/3" image={require("../../Assets/me1.png")} aLocation="3/11/4/13"  location = "3/11/4/12" location2 = "3/11/4/13" tabName="About"/>
        <a href="https://github.com/lihiZi" style={{gridArea: "4/2/5/3"}}><img className={classes.github} src = {require("../../Assets/github.png")}  alt= "mmm" /></a>
        <a href="https://www.linkedin.com/in/lihi-ziger-056867b2/" style={{gridArea: "4/3/5/4"}}> <img className={classes.linkedin} src = {require("../../Assets/in.png")}  alt= "mmm" /> </a>
        <a href="https://www.facebook.com/lihi.zig" style={{gridArea: "4/4/5/5"}}><img className={classes.codewars} src = {require("../../Assets/fb.png")}  alt= "mmm" /></a>
        <div className={classes.frames}></div>
        <div className={classes.comics}><p style={{margin:"35px"}}>Hello! I created this site using react16,built a Grid-CSS layout, and used Photoshop. </p></div> 
        <img className={classes.tag}  src = {require("../../Assets/tag.png")}  alt= "mmm"/>
       
    
        
    </React.Fragment>
    
   
    )}



export default Radium(header);