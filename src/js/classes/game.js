import $ from 'jquery';
import {Card} from './card.js';

class Game{
  constructor(){
    this.deck = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    this.previousCard = 0;
    this.valCard = 0;
    this.cardTarget;
    this.prevCardTarget;
  }

  shuffleDeck() {
    // console.log(this.deck);
      let deck = this.deck;
      let i, randCard, x;
      for (i = deck.length; i; i--) {
          randCard = Math.floor(Math.random() * i);
          x = deck[i - 1];
          deck[i - 1] = deck[randCard];
          deck[randCard] = x;
      }
          // console.log(this.deck);
      return(deck);
  }

  dealDeck(shuffledDeck){
      let node = $(".cardsList");
      let i, card, x;
      let d = shuffledDeck;
      for (i = d.length; i; i--) {
        node.append(`<li class="card facedown" id="${i}">${d[i-1]}</li>`);
      }
    }

  setup(){
    let shuffledDeck = this.shuffleDeck();
    this.dealDeck(shuffledDeck);
  }

  checkWin(){
    if (this.deck.length > 0){
      return;
    }
    else {
      alert("YOU WIN!");
    }
  }
}

export {Game};
