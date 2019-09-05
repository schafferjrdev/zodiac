import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import _ from 'lodash';

//Images
import Zodiac from './img/Zodiac.jpg'

import Leo from './img/Leo.jpg'
import Libra from './img/Libra.jpg'
import Gemini from './img/Gemini.jpg'
import Pisces from './img/Pisces.jpg'
import Aries from './img/Aries.jpg'
import Aquarius from './img/Aquarius.jpg'
import Cancer from './img/Cancer.jpg'
import Capricorn from './img/Capricorn.jpg'
import Sagittarius from './img/Sagittarius.jpg'
import Scorpio from './img/Scorpio.jpg'
import Taurus from './img/Taurus.jpg'
import Virgo from './img/Virgo.jpg'


import Card from './Card.js'

//Icons
import MenuIcon from '@material-ui/icons/Menu';

//Material
import IconButton from '@material-ui/core/IconButton';


 

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  boardgame:{
    position:'relative',
    background:'#ddd',
    width:'1280px',
    height:'920px',
    margin:'auto',
    border:'1px solid #ccc',
    borderRadius: '2vmin'
  },
  hand:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'15%',
    backgroundColor:'#ccc',
    color:'#666',
    textAlign:'center',
    borderRadius: '2vmin',
  },
  heaven:{
    borderRadius: '2vmin',
    position:'absolute',
    top:0,
    width:'100%',
    height:'15%',
    backgroundColor:'#ccc',
    color:'#666',
    textAlign:'center',
  },
  deck:{
    position:'absolute',
    bottom:0,
    width:'12%',
    height:'15%',
    backgroundColor:'#aaa',
    color:'#666',
    textAlign:'center',
    borderRadius: '2vmin',
  },
  discard:{
    position:'absolute',
    right:0,
    bottom:0,
    width:'12%',
    height:'15%',
    backgroundColor:'#aaa',
    color:'#666',
    textAlign:'center',
    borderRadius: '2vmin',
  },
  deckcards:{
    zIndex:100,
    position:'absolute',
    bottom:5,
    left:30,
    cursor:'pointer'
  }
  
  
});
//Falta fazer devolver o deck, fazer os poderes, os decks e os OnDrops!!!!

function App(props) {
  const{ classes } = props;
  let zodiacs=[Leo,Libra,Gemini,Pisces,Aries,Aquarius,Cancer,Capricorn,Sagittarius,Scorpio,Taurus,Virgo];
    
  zodiacs = _.concat(zodiacs,zodiacs,zodiacs,zodiacs,zodiacs);
  zodiacs = _.shuffle(zodiacs);
  let myhand = _.pullAt(zodiacs, [0,1,2,3,4]);
  
  

  
  
  const [deck, setDeck] = useState(zodiacs);

  const [hand, setHand] = useState(myhand);

  const [inGame, setInGame] = useState([]);

  
  // let cards = [Gemini,Libra,Leo,Leo,Libra,Gemini];
  

  let handleDraw = (e) =>{
    
    // let dad = e.target.parentNode;
    // let newCard = <Card onDrag={handleDrag} dY={0} key={Virgo} src={Virgo}/>;
    // children.join(newCard);
    // dad.appendChild();
    console.log(deck);
    if(deck.length){
      let draw = deck.pop();
      console.log(draw);
      console.log(deck);
      setDeck(deck);
      setInGame([...inGame,draw]);
    }
  }

  let handleDrag = (e) =>{
    console.log(e.target.parentNode);
    let dad = e.target.parentNode;
    let el = e.target;
    e.target.remove();
    dad.appendChild(el);
  }

  let initialHandPosX = (i) =>{
    let pos=[350,450,550,650,750];
    
    return pos[i];
  }

 
  
 

  // useEffect(() => {
  //   // Update the document title using the browser API
    
  // });
  return (
    <div  >
      
      {/* Mesa */}
      <div className={classes.boardgame}>
      <div className={classes.heaven}><h2>HEAVEN</h2></div>
      <div className={classes.hand}><h2>HAND</h2></div>
      <div className={classes.deck}><h2>DECK</h2></div>
      <div className={classes.discard}><h2>TRASH</h2></div>

      {/* Cartas */}
      
      
      
      {hand.map((card,i) => <Card onDrag={handleDrag} dX={initialHandPosX(i)} key={i} src={card}/>)}
      {inGame.map((card,i) => <Card onDrag={handleDrag} dX={200} key={i} src={card}/>)}
      
      
      <img style={!deck.length?{opacity:'0', cursor:'not-allowed'}:{}} width={90} draggable={true}  onDragStart={handleDraw}  className={classes.deckcards} src={Zodiac} alt='Zodiac'/>
      </div>
      
      
    </div>
    );
}

export default withStyles(styles)(App);