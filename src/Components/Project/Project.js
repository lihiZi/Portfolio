import React, {Component} from 'react';
import classes from './Project.css';
import Zoom from 'react-reveal/Zoom';
import Radium from 'radium';

class Project extends Component{ 
    
    constructor(props) {
        super(props);
        this.hoveredHandler = this.hoveredHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
        this.state = {
            extraFrame : {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "30%",
                color: "transparent",
                textAlign: "center",
                gridArea:this.props.location,
                visibility: "hidden",
                zIndex:"6",
                transition: "background-color 2s, visibility 2s, color 2s ",
                '@media (max-width: 830px)': {
                    gridArea: this.props.newLocation,
                },
               
            },
            projectButton: {
                
                backgroundColor: "transparent",
                border: "transparent",
                outline:"none",
                color: "transparent",
                padding: "15px ",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "20px",
                borderRadius: "5%",
                fontFamily: "'Gaegu', cursive",
                cursor: "pointer",
                transition: "background-color 2s, border 2s, color 2s",

          },
          /*style={{gridArea:this.props.location,width:"575px", height:"515px", zIndex:"3", alignSelf:"center", justifySelf:"center" }}*/
          imgStyle : {
            gridArea:this.props.location,
            width:"575px",
            height:"515px",
            zIndex:"3", 
            alignSelf:"center", 
            justifySelf:"center" ,
            '@media (max-width: 830px)': {
                gridArea: this.props.newLocation,
            },

          },

        }
     };
     
     
    hoveredHandler = () => {
       
    console.log("hovered");
    let extraFrame = Object.assign ({}, this.state.extraFrame);
    let projectButton = Object.assign ({}, this.state.projectButton);
    extraFrame.visibility= "visible";
    extraFrame.color = "white";
    extraFrame.backgroundColor="rgba(0, 0, 0, 0.9)";
    projectButton.backgroundColor = "rgba(0, 0, 0, 0.9)"; 
    projectButton.color = "white";
    projectButton.border =  "3px solid #FFDB58";
    this.setState({extraFrame:extraFrame} ); 
    this.setState({projectButton:projectButton} ); 
        
    }
    
        
    mouseLeaveHandler = () => {
        let extraFrame = Object.assign ({}, this.state.extraFrame);
        let projectButton = Object.assign ({}, this.state.projectButton);
        extraFrame.backgroundColor="transparent"; 
        extraFrame.color = "transparent";
        extraFrame.visibility="hidden";
        projectButton.backgroundColor = "transparent"; 
        projectButton.color = "transparent";
        projectButton.border = "transparent";
        this.setState({extraFrame:extraFrame} );
        this.setState({projectButton:projectButton} ); 
    


    }

    
            
    render (){
    
        return (
            <React.Fragment>
            <h1 className={classes.title}>Projects.</h1>
            <div className={classes.hide} style={{gridArea:"15/1/27/13", zIndex:"0", backgroundColor:"rgba(116,140,140,0.1)"}}> </div>
            <div className= {classes.hide} style={{gridArea:"14/1/17/13", zIndex:"1", backgroundColor:"white",borderBottomLeftRadius:"50% 50%" ,borderBottomRightRadius:"50% 50%"}}> </div>
            <Zoom>
           
            <div  onMouseLeave={this.mouseLeaveHandler.bind(this)}  style={this.state.extraFrame}> <p style={{margin:"50px"}}>
                {this.props.children}</p>
                 
                <a href={this.props.hrf} style={this.state.projectButton}> See Project </a> 
            </div>
            
           
          {/*  <div  className={classes.frame} style={{gridArea:this.props.location}} ></div>*/}
            <img  onMouseEnter={this.hoveredHandler.bind(this)} src = {this.props.img} alt="b" style={this.state.imgStyle}/>  
           </Zoom>
           </React.Fragment>
        )
    }
    }
  /*}  border-bottom-left-radius: 50% 20%;
border-bottom-right-radius: 50% 20%;*/





export default Radium(Project);