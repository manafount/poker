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
    this.handRank = null;
    this.getNewHand = this.getNewHand.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.animateDraw = this.animateDraw.bind(this);
    this.resetHandState = this.resetHandState.bind(this);
    this.getHandRank = this.getHandRank.bind(this);
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
      this.deck.cards.unshift(card);
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
    this.handRank = this.getHandRank();
    setTimeout(() => this.animateDraw(newCards, emptyPositions), 1200);
    setTimeout(this.resetHandState, 1200);
  }

  getHandRank() {
    let straight = this.getStraight();
    let flush = this.getFlush();
    let multiples = this.getMultiples();
    console.log("flush: " + flush);
    console.log("straight: " + straight);
    console.log("multiples: " + multiples);

    if (straight && flush) {
      return "sf";
    }else if (multiples === 4) {
      return "4";
    }else if (multiples === "fh") {
      return "fh";
    }else if (flush) {
      return "flush";
    }else if (straight) {
      return "straight";
    }else if (multiples === 3) {
      return "3";
    }else if (multiples === "2p") {
      return "2p";
    }else if (multiples === 2) {
      return "1p";
    }else{
      return "0p";
    }
  }

  getStraight() {
    let lastnum = this.hand.number;
    let straight = true;
    this.hand.sort((a, b) => {
      return a.number - b.number;
    });
    for (var i = 1; i < this.hand.length; i++) {
      if (this.hand[i] !== (lastnum++)) straight = false;
    }
    return straight;
  }

  getFlush() {
    return this.hand.every((card) => {
      return card.suit === this.hand[0];
    });
  }

  getMultiples() {
    let firstpair = null;
    let secondpair = null;
    let max = 1;
    this.hand.forEach((card) => {
      let num = 0;
      this.hand.forEach((card2) => {
        if (card.number === card2.number) num++;
      });
      if (num > 1) {
        if (firstpair && card.number !== firstpair) {
          secondpair = card.number;
          if (num > max) max = num;
        }else{
          firstpair = card.number;
          if (num > max) max = num;
        }
      }
    });

    if (firstpair && secondpair) {
      if (max > 2) {
        return "fh";
      }else{
        return "2p";
      }
    }

    switch(max) {
      case 4: return 4;
      case 3: return 3;
      case 2: return 2;
      default: return 0;
    }
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
