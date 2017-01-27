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
    this.animateDraw = this.animateDraw.bind(this);
    this.resetHandState = this.resetHandState.bind(this);
  }

  getNewHand() {
    this.hand = this.deck.draw(5);
    this.animateDraw(this.hand);
  }

  getNewCards() {
    let emptyPositions = [];
    let cardImages = [];
    this.selectedCards.forEach((card) => {
      let cardImage = this.stage.getChildByName(card.name);
      cardImages.push(cardImage);
      emptyPositions.push([cardImage.x, cardImage.y]);
      this.deck.cards.push(card);
    });

    // return the discarded cards to the bottom of the deck
    cardImages.forEach((cardImage, index) => {
      createjs.Tween.get(cardImage)
        .wait(index * 200)
        .to({
          x: 350, y: 100,
          scaleX: 0,
          regY: 0
        }, 700)
        .call(this.selectedCards[index].flip)
        .to({ scaleX: 1 }, 200);
      cardImage.removeEventListener("click", this.handleClick);
    });
    this.hand = this.hand.filter((card) => {
      return !(this.selectedCards.includes(card));
    });

    // draw new cards from the deck and add them to the hand
    let newCards = this.deck.draw(emptyPositions.length);
    this.hand = this.hand.concat(newCards);
    setTimeout(() => this.animateDraw(newCards, emptyPositions), 1200);
    setTimeout(this.resetHandState, 1200);
  }

  resetHandState() {
    this.selectedCards = [];
    let dealButton = document.getElementById("deal-button");
    let drawButton = document.getElementById("draw-button");
    drawButton.innerHTML = "Draw";
    drawButton.disabled = true;
    dealButton.disabled = false;

    this.hand.forEach((card) => {
      this.deck.cards.push(card);
      this.stage.getChildByName(card.name)
        .removeEventListener("click", this.handleClick);
    });
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

  animateDraw(cards, positions = this.trayPositions) {
    let cardImages = [];
    cards.forEach((card) => {
      let cardImage = this.stage.getChildByName(card.name);
      cardImages.push(cardImage);
    });
    cardImages.forEach((cardImage, index) => {
      createjs.Tween.get(cardImage)
        .wait(index * 200)
        .to({
          x: positions[index][0],
          y: positions[index][1],
          scaleX: 0
        }, 700)
        .call(cards[index].flip)
        .to({ scaleX: 1 }, 200);
      cardImage.addEventListener("click", this.handleClick);
    });
  }
}

export default Hand;
