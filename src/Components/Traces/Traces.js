import React from 'react';
import classes from './Traces.css';
import Zoom from 'react-reveal/Zoom';

const traces = (props) =>{
      let b = props.cls;
      console.log(b);
        return (
            <Zoom>
            <img className={classes[props.cls]} style={{gridArea:props.location,zIndex:"2"}} src = {require("../../Assets/astrics.png")}  alt= "mmm" />
            </Zoom>

        )
 
}












export default traces;