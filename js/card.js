import createjs from 'createjs-easeljs';

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
    this.faceUp = false;
    this.name = `${number}${suit[0]}`;
    this.cardImage = new createjs.Bitmap(`assets/back.jpg`);
  }

  getImage() {
    if (this.faceUp) {
      this.cardImage.image = document.createElement("img");
			this.cardImage.image.src = `assets/${this.number}${this.suit[0]}.jpg`;
    }else{
      this.cardImage.image = document.createElement("img");
			this.cardImage.image.src = `assets/back.jpg`;
    }
    this.cardImage.x = 300;
    this.cardImage.y = 100;
    this.cardImage.name = this.name;
    return this.cardImage;
  }

  flip() {
    this.faceUp = !this.faceUp;
  }
}

export default Card;
