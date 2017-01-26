import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
    this.faceUp = false;
    this.selected = false;
    this.name = `${number}${suit[0]}`;
    this.cardImage = new createjs.Bitmap(`assets/back.jpg`);

    this.updateFace = this.updateFace.bind(this);
    this.flip = this.flip.bind(this);
  }

  getImage() {
    this.updateFace();
    this.cardImage.x = 350;
    this.cardImage.y = 100;
    this.cardImage.name = this.name;
    return this.cardImage;
  }

  toggleSelected() {
    this.selected = !this.selected;
    if (this.selected) {
      createjs.Tween.get(this.cardImage)
        .to({ regY: 50 }, 100);
    }else{
      createjs.Tween.get(this.cardImage)
        .to({ regY: 0 }, 100);
    }
    return this.selected;
  }

  updateFace() {
    if (this.faceUp) {
      this.cardImage.image = document.createElement("img");
      this.cardImage.image.src = `assets/${this.number}${this.suit[0]}.jpg`;
    }else{
      this.cardImage.image = document.createElement("img");
      this.cardImage.image.src = `assets/back.jpg`;
    }
  }

  flip() {
    this.faceUp = !this.faceUp;
    this.updateFace();
  }
}

export default Card;
