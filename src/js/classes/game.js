import {Card} from './card.js';

class Game{




  setup(){
    let cards = [];
    let numOfCols = 5;
    let numOfRows = 4;

    for (var c = 0; c < numOfCols; c++) {
      for (var r = 0; r < numOfRows; r++) {
        cards.push(new Card(c * 78 + 10, r * 78 + 40));
      };
    };

    for (var i = 0; i < cards.length; i++) {
        cards[i].drawFaceDown();
    }

  };
}



export {Game};
