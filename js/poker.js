import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Card from './card';
import Deck from './deck';

document.addEventListener('DOMContentLoaded', () => {
  const maxX = 800;
  const maxY = 600;
  const stage = new createjs.Stage("canvas");
  // const newDeck = new deck(stage);

  let deck = new Deck();
  deck.reset();
  console.log(deck);

  let cardImages = deck.getImages();
  stage.addChild(...cardImages);

  cardImages.forEach((card) => {
    createjs.Tween.get(card)
      .to({ x: (Math.random() * (maxX - 100)), y: (Math.random() * (maxY - 200)) }, 1000)
      .to({ x: (Math.random() * (maxX - 100)), y: (Math.random() * (maxY - 200)) }, 1000)
      .to({ x: 0, y: 0 }, 1000);
  });

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
});
