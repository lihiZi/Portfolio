import React from 'react';
import classes from './Skills.css';
import Zoom from 'react-reveal/Zoom';

const skills = () =>
{
    const style = {
       
            width: "62px",
            maxHeight: "62px",
            alignSelf: "center",
            justifySelf: "center",
            zIndex: "3"
            
            
        
           
    }
    return (
     
        <Zoom>
          
            
            <div className= {classes.frame}> </div>
            <div className= {classes.frame1}> </div>
                
            
            <h1 className={classes.title}> Skills. </h1>
           

            <img style={style} src = {require("../../Assets/js.png")}  alt= "mmm"  className={classes.JavaScript }/>
            <h4 style={{alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.JavaScript } > JavaScript </h4>

            <img style={style} src = {require("../../Assets/java.png")}  alt= "mmm" className={classes.Java}/>
            <h4 style={{alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.Java} > Java </h4>

            <img style={style} src = {require("../../Assets/react.png")}  alt= "mmm"  className={classes.React16}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.React16} > React16 </h4>

            <img style={style} src = {require("../../Assets/node.png")}  alt= "mmm"  className={classes.NodeJs}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.NodeJs}> NodeJs </h4>

            <img style={style} src = {require("../../Assets/db.png")}  alt= "mmm" className={classes.MongoDB}/>
            <h4 style={{alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.MongoDB} > MongoDB </h4>

            <img style={style} src = {require("../../Assets/html.png")}  alt= "mmm" className={classes.HTML5}/>
            <h4 style={{alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}}  className={classes.HTML5}> HTML5 </h4>

            <img style={style} src = {require("../../Assets/css.png")}  alt= "mmm"  className={classes.CSS3}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.CSS3} > CSS3 </h4>

            <img style={style} src = {require("../../Assets/git2.png")}  alt= "mmm"  className={classes.git}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.git}> git </h4>

             <img style={style} src = {require("../../Assets/npm.png")}  alt= "mmm" className={classes.npm}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}}  className={classes.npm} > npm </h4>

            <img style={style} src = {require("../../Assets/php.png")}  alt= "mmm" className={classes.php}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.php} > php </h4>

            <img style={style} src = {require("../../Assets/wp.png")}  alt= "mmm"  className={classes.WordPress}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}} className={classes.WordPress} > WordPress </h4>

            <img style={style} src = {require("../../Assets/msql.png")}  alt= "mmm"  className={classes.MySQL}/>
            <h4 style={{ alignSelf:"end",justifySelf:"center", marginBottom:"0", zIndex:"3"}}  className={classes.MySQL} > MySQL </h4>
          
        </Zoom>
        
    )


    
}

export default skills;