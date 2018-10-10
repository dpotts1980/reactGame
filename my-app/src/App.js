import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Navbar from './components/Navbar/Navbar.js';
//import Modal from './components/Modal/Modal.js';
import CardsClick from './components/CardsClick';
import cards from './cards.json';
import Modal from './components/Modal';

class App extends Component {
  state = {
    cards: cards
  }
 /*  handleClickEvent = () =>{
    console.log("you Clicked!!!")
  } */
  render() {
    return (
      <div className="App">
        {this.state.cards.map( card => (
          <CardsClick image={card.image} /* onClick={handleClickEvent()} */>{card.name}</CardsClick> 
        )
      )}
     
      </div>
    );
  }

/*   render() {
    return (
      <div className="App">
        {this.state.cards.map( card => (
          <Modal image={card.image} >{card.name}</Modal> 
        )
      )}
     
      </div>
    );
  } */
}//class app extends Component ends here

export default App;
