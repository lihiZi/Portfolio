import React from 'react';
import classes from './About.css';
import Zoom from 'react-reveal/Zoom';
import ScrollableAnchor from 'react-scrollable-anchor';

const about = () =>
{
    return (
        <Zoom>
            <div className={classes.frame}> </div>
           <h1 className={classes.title}> About Me. </h1>
            <div className={classes.frame1}> </div>
             <p className={classes.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                 officia deserunt mollit anim id est laborum.</p>
          
            
       
        </Zoom>
        
    )


    
}

export default about;