import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
//Images
import Zodiac from './img/Zodiac.jpg'

import { withStyles } from '@material-ui/core/styles';
// import classes from '*.module.scss';



const styles = theme => ({
  card:{
    borderRadius:'5px',
    border:'1px solid #ccc',
    position:'absolute',
    
    width:'90px',
    height:'125px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '&:hover':{
      transform: 'scale(1.1)',
      cursor: 'pointer',
    }
    
  }
  
});

let Card = (props) => {

 

const {
        classes,
        src,
        dX = 30,
        dY = 790,
        disabled,
        onDrag,
        ...others
      } = props


     
      return(
        <Draggable
          defaultPosition={{x: dX, y: dY}}
          
          bounds="parent"
          disabled={disabled}
          onStart={onDrag}
        >
        
        <div  style={{backgroundImage: `url("${src}")`}} className={classes.card}/>
        
        
        </Draggable>
      );
      

}

export default withStyles(styles)(Card);