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
             <p className={classes.content}> 

I am Lihi Ziger. I enjoy developing user-friendly, responsive, and imaginative applications and sites. 
I love creating new things, solving logical problems, and learning about new technologies.
This explains my passion for coding.
I have an extensive training in coding and experience in working with various languages.
In the past two years, I have taught myself how to code by successfully completing several
academic courses in Computer Science, graduating from an intensive coding bootcamp,
and by immersing myself in numerous books, blogs, and online tutorials about coding and developing.
I am proficient in Javascript (ES6), React16, NodeJS, HTML and CSS. 
I am looking forward to working in an exciting environment that will
allow me to make use of my acquired expertise and further develop it.
I also seek to learn from others, and contribute to innovative and fascinating projects.







</p>
          
            
       
        </Zoom>
        
    )


    
}

export default about;