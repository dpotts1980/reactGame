import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navbar from './components/Navbar/Navbar.js';
//import Modal from './components/Modal/Modal.js';
import CardsClick from './components/CardsClick';
import cards from './cards.json';

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
      {/* <CardsClick image={cards[1].image}>Child 2</CardsClick> 
      <CardsClick image={cards[2].image}>Child 3</CardsClick>  */}

      {/* Cardsclick(); */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
