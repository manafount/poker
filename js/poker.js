import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Deck from './deck';
import Hand from './hand';

class Poker {
  constructor(stage) {
    this.maxX = 800;
    this.maxY = 500;
    this.stage = stage;
    this.deck = new Deck(this.stage);
    this.hand = new Hand(this.deck, this.stage);
    this.active = 0;
    this.gameState = "Game Over";

    this.cardImages = this.deck.getImages();
    this.stage.addChild(...this.cardImages);
    this.handleDrawButton = this.handleDrawButton.bind(this);
    this.shuffleComplete = this.shuffleComplete.bind(this);
  }

  play() {

  }

  handleDealButton(dealButton) {
    console.log(this.gameState);
    if (this.gameState === "Game Over") {
      dealButton.disabled = true;
      this.shuffleDeck();
    }
  }

  handleDrawButton(drawButton) {
  }

  shuffleDeck() {
    this.active = this.cardImages.length;
    console.log(this.active);
    this.cardImages.forEach((card) => {
      createjs.Tween.get(card)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 700)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 700)
        .to({ x: 350, y: 100 }, 700)
        .call(this.shuffleComplete);
    });
  }

  shuffleComplete() {
    this.active--;
    if (this.active === 0){
      setTimeout(this.hand.getNewHand, 300);
    }
  }
}

export default Poker;
