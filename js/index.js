import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Poker from './poker';
import Deck from './deck';
import Hand from './hand';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage("canvas");
  let newPokerGame = new Poker(stage);
  newPokerGame.shuffleDeck();
  // newPokerGame.deal();

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
});
