import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Deck from './deck';
import Hand from './hand';

class Poker {
  constructor(stage) {
    this.maxX = 800;
    this.maxY = 600;
    this.stage = stage;
    this.deck = new Deck(this.stage);
    this.hand = new Hand(this.deck, this.stage);

    this.cardImages = this.deck.getImages();
    this.stage.addChild(...this.cardImages);
  }

  play() {

  }

  shuffleDeck() {
    this.cardImages.forEach((card) => {
      createjs.Tween.get(card)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 1000)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 1000)
        .to({ x: 300, y: 100 }, 1000);
    });
  }
}

export default Poker;
