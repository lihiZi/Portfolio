import React from 'react';
import classes from './Skills.css';
import Zoom from 'react-reveal/Zoom';
import Radium from 'radium';

const skills = () =>
{
    const style = {
       
            width: "62px",
            maxHeight: "62px",
            zIndex: "3",    
           
    }

    return (
     
        <Zoom>
            <div className= {classes.frame}> </div>
            <div className= {classes.frame1}> </div>  
            <h1 className={classes.title}> Skills. </h1>
            <img style={style} src = {require("../../Assets/js.png")}  alt= "mmm"  className={classes.JavaScript }/>
            <h4  style ={{gridArea:"11/8/12/10", '@media (max-width: 830px)': {gridArea: "15/1/16/3",justifySelf:"start",
             padding: "5px"}}} className={classes.skillname } > JavaScript </h4>
             <img style={style} src = {require("../../Assets/java.png")}  alt= "mmm" className={classes.Java}/>
             <h4  style={{gridArea:"11/9/12/11" ,'@media (max-width: 830px)': {gridArea: "15/1/16/3",justifySelf:"center",padding: "5px"
                }}} className={classes.skillname} > Java </h4>
            <img style={style} src = {require("../../Assets/react.png")}  alt= "mmm"  className={classes.React16}/>
            <h4  style={{gridArea:"11/10/12/12",'@media (max-width: 830px)': {gridArea: "15/1/16/3",justifySelf:"end",padding: "5px"
                }}} className={classes.skillname} > React16 </h4>
           <img style={style} src = {require("../../Assets/node.png")}  alt= "mmm"  className={classes.NodeJs}/>
            <h4  style={{gridArea:"11/11/12/13",'@media (max-width: 830px)': {gridArea: "16/1/17/3",justifySelf:"start",padding: "5px"
                }}} className={classes.skillname}> NodeJs </h4>

            <img style={style} src = {require("../../Assets/db.png")}  alt= "mmm" className={classes.MongoDB}/>
            <h4  style={{gridArea:"12/8/13/10" ,'@media (max-width: 830px)': {gridArea: "16/1/17/3",justifySelf:"center",padding: "5px"
                }}} className={classes.skillname} > MongoDB </h4>

            <img style={style} src = {require("../../Assets/html.png")}  alt= "mmm" className={classes.HTML5}/>
            <h4  style={{gridArea:"12/9/13/11" ,'@media (max-width: 830px)': {gridArea: "16/1/17/3",justifySelf:"end",padding: "5px"
                }}}  className={classes.skillname}> HTML5 </h4>

            <img style={style} src = {require("../../Assets/css.png")}  alt= "mmm"  className={classes.CSS3}/>
            <h4  style={{gridArea:"12/10/13/12" ,'@media (max-width: 830px)': {gridArea: "17/1/18/3",justifySelf:"start",padding: "5px"
                }}} className={classes.skillname} > CSS3 </h4>

            <img style={style} src = {require("../../Assets/git2.png")}  alt= "mmm"  className={classes.git}/>
            <h4  style={{gridArea:"12/11/13/13" ,'@media (max-width: 830px)': {gridArea: "17/1/18/3",justifySelf:"center",padding: "5px"
                }}} className={classes.skillname}> git </h4>

             <img style={style} src = {require("../../Assets/npm.png")}  alt= "mmm" className={classes.npm}/>
            <h4   style={{gridArea:"13/8/14/10" ,'@media (max-width: 830px)': {gridArea: "17/1/18/3",justifySelf:"end",padding: "5px"
                }}}  className={classes.skillname} > npm </h4>

            <img style={style} src = {require("../../Assets/php.png")}  alt= "mmm" className={classes.php}/>
            <h4  style={{gridArea:"13/9/14/11",'@media (max-width: 830px)': {gridArea: "18/1/19/3",justifySelf:"start",padding: "5px"
                }}} className={classes.skillname} > php </h4>

            <img style={style} src = {require("../../Assets/wp.png")}  alt= "mmm"  className={classes.WordPress}/>
            <h4  style={{gridArea:"13/10/14/12",'@media (max-width: 830px)': {gridArea: "18/1/19/3",justifySelf:"center",padding: "5px"
                }}} className={classes.skillname} > WordPress </h4>

            <img style={style} src = {require("../../Assets/msql.png")}  alt= "mmm"  className={classes.MySQL}/>
            <h4  style={{gridArea:"13/11/14/13" ,'@media (max-width: 830px)': {gridArea: "18/1/19/3",justifySelf:"end",padding: "5px"
                }}}  className={classes.skillname} > MySQL </h4>
          
        </Zoom>
        
    )


    
}

export default Radium(skills);