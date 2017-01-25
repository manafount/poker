import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

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


  createjs.Tween.get(cardImage, { loop: true })
  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
  .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
  .to({ alpha: 0, y: 225 }, 100)
  .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
  .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
});
