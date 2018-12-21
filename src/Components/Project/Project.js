import React, {Component} from 'react';
import classes from './Project.css';
import Zoom from 'react-reveal/Zoom';
import Radium from 'radium';

class Project extends Component{  
    constructor(props) {
        super(props);
        this.state = {
              extraFrame: {
                gridArea:this.props.location,
                zIndex:"4",
                color:"transparent",
                cursor: "pointer",
                ':hover': {
                    backgroundColor: "rgba(116, 140, 140, 0.95)",
                    borderRadius: "30%",
                    color: "white",
                    textAlign: "center",
                    gridArea:this.props.location,
                    zIndex:"6",
                    transition: "background-color 1s,width 2s,  color 2s ",
                    
                },
                    '@media (max-width: 830px)':
                    {gridArea: this.props.newLocation
                  },


                },
            'button' : { 
                 
                padding: "15px ",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "20px",
                borderRadius: "5%",
                fontFamily: "'Gaegu', cursive",
                cursor: "pointer",
                transition: "background-color 1s, border 1s, color 1s",
              
            
  
             
              },

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
     
     

    
        
 

    
            
    render (){
    
        return (
            <React.Fragment>
            
                <h1 className={classes.title}>Projects.</h1>
                {/* the folowing two divs represents the wavey background of projects section */}
                <div className={classes.hide} style={{gridArea:"15/1/27/13", zIndex:"0", backgroundColor:"rgba(116,140,140,0.1)"}}> </div>
                <div className= {classes.hide} style={{gridArea:"14/1/17/13", zIndex:"1", backgroundColor:"white",
                borderBottomLeftRadius:"50% 50%" ,borderBottomRightRadius:"50% 50%"}}> </div>
                <a target="_blank" key="extraFrame" href={this.props.hrf} style={this.state.extraFrame}>
                    <p style={{gridArea:this.props.location, padding:"20%"}}>
                    {this.props.children}<br/> 
                        <span style={this.state.button}>See Project</span>
                    </p>
                </a>

                <Zoom>
                <img  src = {this.props.img} alt="b" style={this.state.imgStyle}/> 
                </Zoom> 
                      
           </React.Fragment>
        )
    }
    }
  /*}  border-bottom-left-radius: 50% 20%;
border-bottom-right-radius: 50% 20%;*/





export default Radium(Project);