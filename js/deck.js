import Card from './card';
import createjs from 'createjs-easeljs';

class Deck{
  constructor(stage) {
    const suits = ["diamonds", "hearts", "spades", "clubs"];
    this.stage = stage;
    this.cards = [];
    for (let suit = 0; suit < 4; suit++) {
      for (let i = 1; i <= 13; i++) {
        let card = new Card(i, suits[suit]);
        this.cards.push(card);
      }
    }
    this.shuffle();
  }

  getImages() {
    let cardImages = [];
    this.cards.forEach((card) => {
      cardImages.push(card.getImage());
    });
    return cardImages;
  }

  reset() {
    this.cards.map((card) => {
      if (card.faceUp) {
        card.flip();
      }
    });
    this.cards = this.shuffle();
  }

  draw(num = 1) {
    let result = [];
    for (let i = 0; i < num; i++) {
      result.push(this.cards.pop());
    }
    return result;
  }

  shuffle() {
    //Fisher-Yates shuffle
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;
  }

}

export default Deck;
