import createjs from 'createjs-easeljs';

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
    this.faceUp = false;
  }

  getImage() {
    if (this.faceUp) {
      let cardImage = new createjs.Bitmap(`assets/${this.number}${this.suit[0]}.jpg`);
      return cardImage;
    }else{
      let cardImage = new createjs.Bitmap(`assets/back.jpg`);
      return cardImage;
    }
  }

  flip() {
    this.faceUp = !this.faceUp;
  }
}

export default Card;
