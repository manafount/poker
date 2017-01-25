import Card from './card';
import createjs from 'createjs-easeljs';

class Deck{
  constructor() {
    const suits = ["diamonds", "hearts", "spades", "clubs"];
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
    // if (this.faceUp) {
    //   return `assets/${this.number}${this.suit[0]}.jpg`;
    // }else{
    //   return `assets/back.jpg`;
    // }
  }

  reset() {
    this.cards.map((card) => {
      if (card.faceUp) {
        card.flip();
      }
    });
    this.cards = this.shuffle();
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;
  }
}

export default Deck;
