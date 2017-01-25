import Card from './card';
import Deck from './deck';
import createjs from 'createjs-easeljs';

class Hand {
  constructor(deck, stage) {
    this.trayPositions = [
      [0, 300],
      [150, 300],
      [300, 300],
      [450, 300],
      [600, 300]
    ];
    this.hand = [null, null, null, null, null];
    this.deck = deck;
    this.stage = stage;
  }

  getNewHand() {
    this.hand = this.deck.draw(5);
    console.log(this.hand);
    this.animateDraw(this.hand);
  }

  animateDraw(cards) {
    let cardImages = [];
    cards.forEach((card) => {
      let cardImage = this.stage.getChildByName(card.name);
      cardImages.push(cardImage);
    });
    cardImages.forEach((card, index) => {
      createjs.Tween.get(card)
        .to({
          x: this.trayPositions[index][0],
          y: this.trayPositions[index][1]
          }, 1000);
    });
  }
}

export default Hand;
