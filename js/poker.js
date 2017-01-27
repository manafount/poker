import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Deck from './deck';
import Hand from './hand';

class Poker {
  constructor(stage) {
    this.maxX = 800;
    this.maxY = 500;
    this.stage = stage;
    this.deck = new Deck(this.stage);
    this.hand = new Hand(this.deck, this.stage);
    this.active = 0;
    this.gameState = "Game Over";
    this.score = 100;
    this.currentBet = 10;

    this.scoreMultipliers = {
      "sf"       : 500,
      "4"        : 200,
      "fh"       : 50,
      "flush"    : 20,
      "straight" : 10,
      "3"        : 5,
      "2p"       : 3,
      "1p"       : 0,
      "0p"       : 0
    };

    this.drawPokerLogo();
    this.cardImages = this.deck.getImages();
    this.stage.addChild(...this.cardImages);
    this.handleDrawButton = this.handleDrawButton.bind(this);
    this.shuffleComplete = this.shuffleComplete.bind(this);
  }

  drawPokerLogo() {
     let pokerText = new createjs.Text("Poker!", "40px Comfortaa", "white");
     pokerText.x = 335;
     pokerText.y = 30;
     this.stage.addChild(pokerText);
  }

  drawScoreHelper() {
    let container = new createjs.Container();
    container.addChild();
    container.x = 100;
  }

  drawResult(result) {

  }

  handleDealButton(dealButton) {
    if (this.gameState === "Game Over") {
      this.gameState = "Drawing";
      dealButton.disabled = true;
      this.deck.reset();
      this.shuffleDeck();
      this.score -= this.currentBet;
      this.updateScore();
    }
  }

  updateScore() {
    document.getElementById("score").innerHTML = `Current Bank: ${this.score}`;
  }

  handleDrawButton(drawButton) {
    if (this.gameState === "Drawing") {
      this.hand.getNewCards();
      this.gameState = "Game Over";
      let result = this.hand.getHandRank();
      this.drawResult(result);
      console.log(this.scoreMultipliers);
      console.log(result);
      this.score += (this.currentBet * this.scoreMultipliers[result]);
      this.updateScore();
    }
  }

  shuffleDeck() {
    this.active = this.cardImages.length;
    this.cardImages.forEach((card) => {
      createjs.Tween.get(card)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 700)
        .to({ x: (Math.random() * (this.maxX - 100)),
              y: (Math.random() * (this.maxY - 200)) }, 700)
        .to({ x: 350, y: 100 }, 700)
        .call(this.shuffleComplete);
    });
  }

  shuffleComplete() {
    this.active--;
    if (this.active === 0){
      setTimeout(this.hand.getNewHand, 300);
    }
  }
}

export default Poker;
