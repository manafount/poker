import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Poker from './poker';
import Deck from './deck';
import Hand from './hand';

document.addEventListener('DOMContentLoaded', () => {
  let drawButton = document.getElementById("draw-button");
  let dealButton = document.getElementById("deal-button");
  let stage = new createjs.Stage("canvas");
  let game = new Poker(stage);

  drawButton.disabled = true;
  drawButton.addEventListener("click", () => game.handleDrawButton(drawButton));
  dealButton.addEventListener("click", () => game.handleDealButton(dealButton));

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
});
