import Card from './card';
import Deck from './deck';
import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

class Hand {
  constructor(deck, stage) {
    this.trayPositions = [
      [50, 300],
      [200, 300],
      [350, 300],
      [500, 300],
      [650, 300]
    ];
    this.hand = [null, null, null, null, null];
    this.selectedCards = [];
    this.deck = deck;
    this.stage = stage;
    this.getNewHand = this.getNewHand.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getNewHand() {
    this.hand = this.deck.draw(5);
    console.log(this.hand);
    this.animateDraw(this.hand);
  }

  handleClick(event) {
    let drawButton = document.getElementById("draw-button");
    let cardImage = event.currentTarget;
    let clickedCard = this.hand.find((card) => {
      return card.name === cardImage.name;
    });
    clickedCard.toggleSelected();
    if (clickedCard.selected) {
      this.selectedCards.push(clickedCard);
    }else{
      let index = this.selectedCards.indexOf(clickedCard);
      this.selectedCards.splice(index, 1);
    }
    if (this.selectedCards.length > 0){
      drawButton.innerHTML = `Draw ${this.selectedCards.length}`;
      drawButton.disabled = false;
    }else{
      drawButton.innerHTML = "Draw";
      drawButton.disabled = true;
    }
  }

  animateDraw(cards) {
    let cardImages = [];
    cards.forEach((card) => {
      let cardImage = this.stage.getChildByName(card.name);
      cardImages.push(cardImage);
    });
    cardImages.forEach((cardImage, index) => {
      createjs.Tween.get(cardImage)
        .wait(index * 200)
        .to({
          x: this.trayPositions[index][0],
          y: this.trayPositions[index][1],
          scaleX: 0
        }, 700)
        .call(cards[index].flip)
        .to({ scaleX: 1 }, 200);
      cardImage.addEventListener("click", this.handleClick);
    });
  }
}

export default Hand;
