# 5 Card Draw Video Poker

[Live Demo][githubPages]
[githubPages]: https://manafount.github.io/poker

## About the Game

This implementation of single player 5 card draw poker was accomplished using JavaScript, canvas, easelJS, and tweenJS.

Game Preview:

![](http://i.giphy.com/l3q2x6344w8egzs9W.gif)


## Instructions

The goal of the game, as with life, is to increase your wealth.
- Press 'Deal' to deal a new hand at the start of the game and after each hand has completed.
- Replace 1 to 5 cards. Click the cards that you'd like to replace to select them, then press the 'Draw X' button.
- The game will calculate your poker hand and notify you of your hand's rank. Hands consisting of One Pair (or lower) lose, while higher ranking hands will earn a bonus based on their multiplier.

Winning!

![](http://i.giphy.com/26gsan9uJJaxUJkE8.gif)


## About the code

Due to the implementation of the BoxBox Physics Engine, there were some limitations to the design of the classes in this game. The Game class created the 'entities' along with the 'world', which resulted in the GameView having difficulties rendering a new game after a previous game was over. Once a 'world' is created, it cannot be destroyed, only the entities within the world can be destroyed. This conflicts with the the game's logic to check for win/losses by counting the number and name of the entities remaining. In order to avoid that conflict, a new game selection would invoke a window refresh callback.

In addition, sprites would not render when too many entities were created in the BoxBox world, this limiting the ability to add additional levels of difficulties in the game.

### Class Breakdown

* Card
* Deck
* Hand
* Poker

#### Card
  The Card class is responsible for keeping track of a few basic card properties. Cards need to know their own name, suit, number, image, and whether they are face up or face down.

#### Deck
  The deck is merely a collection of Card objects. It is in charge of instantiating a deck of 52 cards when the game is first loaded. It also handles drawing/removing cards from the deck and implements a Fisher-Yates shuffling algorithm to randomize the deck at the start of a new hand.

  ```
  class Deck {
    ...
    shuffle() {
      let currentIndex = this.cards.length;
      let temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
      return this.cards;
    }
  }
  ```

#### Hand
  The Hand class is essentially just a store of the player's 5 card hand. However, it's much more complicated under the surface. Keeping track of where a cardImage is located in the "tray" is necessary to avoid cards jumping around every time a player draws new cards. The hand also animates and adds and removes click event listeners as cards enter and leave the hand

  Animating the card draw:
  ```
  class Hand {
    ...
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
  ```

  Most importantly, the hand solves the poker hand at the end of every round and sends the information back to the Poker class.

### Poker
  Poker is a relatively simple class. It handles instantiation of all of the necessary Card, Deck, and Hand objects when the game is loaded. It also receives the solved hand information from the Hand class so that it can display feedback to the player.

  One of the more interesting methods of the Poker class is the shuffle animation:

  ```
  class Poker {
    ...
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
  }
  ```

### Libraries/Plugins

* easelJS
* tweenJS

### More to come
* Prettier flip animations
* Implement a 3D deck to better show that discarded cards are placed on the bottom, while drawn cards are drawn from the top
* Persistent scores with sessions
