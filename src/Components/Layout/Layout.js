import React, {Component}  from 'react';
import Header  from '../Header/Header';
import Traces  from '../Traces/Traces';
import About  from '../About/About';
import Skills from '../Skills/Skills'
import Project from "../Project/Project";
import classes from './Layout.css';










class Layout extends Component {
    state = {
        astLocation: [
            {location: "7/3/8/4", cls:"as4"},
            {location:"7/3/8/4", cls:"as2"},
            {location:"7/3/8/4", cls:"as5"},
            {location: "8/3/9/4", cls:"as1"},
            {location:"8/3/9/4", cls:"as2"},
            {location:"8/3/9/4", cls:"as3"},
            {location:"9/3/10/4", cls:"as4"},
            {location:"9/3/10/4", cls:"as2"},
            {location: "9/3/10/4", cls:"as5"},
            {location: "12/6/13/7", cls:"as1"},
            {location:"12/6/13/7", cls:"as2"},
            {location:"12/6/13/7", cls:"as3"},
            {location:"12/7/13/8", cls:"as4"},
            {location:"12/7/13/8", cls:"as2"},
            {location: "12/7/13/8", cls:"as5"},
            {location: "15/10/16/11", cls:"as4"},
            {location:"15/10/16/11", cls:"as2"},
            {location:"15/10/16/11", cls:"as5"},
            {location: "16/10/17/11", cls:"as1"},
            {location:"16/10/17/11", cls:"as2"},
            {location:"16/10/17/11", cls:"as3"},
            {location:"17/10/18/11", cls:"as4"},
            {location:"17/10/18/11", cls:"as2"},
            {location: "17/10/18/11", cls:"as5"}
        ],
    

}

 

    render(){
        
    
    return(
        <div className={classes.layout}>
        <Header > </Header>
        {this.state.astLocation.map(loc => {
            return <Traces location = {loc.location} cls ={loc.cls}/>
        })}
       
       <About/>
       <Skills/>
        
    
        <Project hrf="https://salty-bayou-23682.herokuapp.com/" target="_blank" img={require("../../Assets/computer.png")} location="18/2/21/5" newLocation="20/2/23/12">OutDoorz is a social app in the making. It aims to connect camping lovers. built with: Node.js, HTML5, CSS3, JavavScript, MongoDB, Bootstrap, npm Packages,and git. Deployed on Heroku servers.</Project>
        <Project hrf="https://salty-cliffs-48595.herokuapp.com/index.html" target="_blank" img={require("../../Assets/Project2.png")} location="18/6/21/9" newLocation="24/2/27/12">A responsive and mobile-friendly company website template, built with: HTML5, CSS3, JavavScript, Bootstrap, and git. Deployed on Heroku servers.</Project>
        <Project hrf="https://cloud-med.herokuapp.com/index.html" img={require("../../Assets/Project3.png")} target="_blank" location="18/10/21/13" newLocation="28/2/31/12">A responsive website that was built for a health tech company. It was made with vanila JavavScript, HTML and CSS, using Grid-css system. </Project>
       

        <div className={classes.footer} > </div> 
        <h3 className={classes.rights} >&#9400; Lihi Ziger</h3>
        
        <img className={classes.phone}  src={require("../../Assets/phone.png")} alt="bbb"/>
        <h2 className={classes.phoneNum}>+1 (443) 616 5716</h2>
        <img className={classes.envelope} src={require("../../Assets/envelope.png")} alt="bbb"/>
        <h2 className={classes.email} >lihi.zig@gmail.com</h2>
    
    </div>
    );
    }

    


    
}



export default Layout;