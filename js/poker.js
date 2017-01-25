import createjs from 'createjs-easeljs';
import Card from './card';
import Deck from './deck';

document.addEventListener('DOMContentLoaded', () => {

  const stage = new createjs.Stage("canvas");
  // const newDeck = new deck(stage);

  let deck = new Deck();
  let testCard = new Card(1, "spades");
  let cardImage = new createjs.Bitmap(deck.cards[0].getImage());
  stage.addChild(cardImage);
  deck.reset();
  console.log(deck);


  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
});
