import $ from 'jquery';

class Game{
  constructor(){
    this.deck = $.merge(cardsArray, cardsArray);
    this.previousCard = 0;
    this.valCard = 0;
    this.cardTarget;
    this.prevCardTarget;
  }

  shuffleDeck() {
      let deck = this.deck;
      let i, randCard, x;
      for (i = deck.length; i; i--) {
          randCard = Math.floor(Math.random() * i);
          x = deck[i - 1];
          deck[i - 1] = deck[randCard];
          deck[randCard] = x;
      }
      return(deck);
  }

  dealDeck(shuffledDeck){
      let node = $(".cardsList");
      let i, card, x;
      let d = shuffledDeck;
      for (i = d.length; i; i--) {
        // node.append(`<li class="card facedown" id="${i}">${d[i-1]}</li>`);
        node.append(`<li class="card facedown" id="${i}"><img src="${this.deck[i-1]}"style='height: 90%; width: 90%; object-fit: contain'></li>`);

      }
    }

  setup(){
    let shuffledDeck = this.shuffleDeck();
    this.dealDeck(shuffledDeck);
  }
}

// Different Optional Card Decks

  // let cardsArray = [1,2,3,4,5,6,7,8,9,10];

  // let cardsArray = ["A","B","C","D","E","F","G","H","I","J"];

  let cardsArray = ["../images/blaze.jpg",
  "../images/aj.jpg","../images/blazelogo.png",
  "../images/crusher.jpg","../images/darington.png",
  "../images/gabby.png","../images/pickle.jpg",
  "../images/starla.png","../images/stripes.png",
  "../images/zeg.png",];


export {Game};
