import createjs from 'createjs-easeljs';
import { Tween, Ease } from 'createjs-tweenjs';

import Deck from './deck';
import Hand from './hand';

const scoreMultipliers = {
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

const resultMessage = {
  "sf"       : "Straight Flush!",
  "4"        : "Four of a Kind!",
  "fh"       : "Full House!",
  "flush"    : "Flush!",
  "straight" : "Straight!",
  "3"        : "Three of a Kind!",
  "2p"       : "Two Pair!",
  "1p"       : "One Pair!",
  "0p"       : "No Pairs"
};

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

    this.cardImages = this.deck.getImages();
    this.stage.addChild(...this.cardImages);
    this.handleDrawButton = this.handleDrawButton.bind(this);
    this.shuffleComplete = this.shuffleComplete.bind(this);

    this.helpText = new createjs.Text("Click the 'Deal' button to begin!", "30px Comfortaa", "white");
    this.helpText.x = 400;
    this.helpText.y = 400;
    this.helpText.name = "helpText";
    this.helpText.textAlign = "center";
    this.stage.addChild(this.helpText);
  }


  drawScoreHelper() {
    let container = new createjs.Container();
    container.addChild();
    container.x = 100;
  }

  drawResult(result) {
    let resultText = new createjs.Text(resultMessage[result], "40px Comfortaa", "white");
    resultText.x = 400;
    resultText.y = 30;
    resultText.textAlign = "center";
    setTimeout(() => {
      this.stage.addChild(resultText);
      createjs.Tween.get(resultText)
        .wait(200)
        .to({ alpha: 0}, 2000)
        .call(() => this.stage.removeChild(resultText));
    }, 500);
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

    this.helpText.visible = false;
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
      this.score += (this.currentBet * scoreMultipliers[result]);
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
