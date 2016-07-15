import $ from 'jquery';
import _ from 'lodash';

// classes
import {Card} from './classes/card.js';
import {Game} from './classes/game.js';
import {Score} from './classes/score.js';
import {Timer} from './classes/timer.js';

// Initialize game

let newGame = new Game();
let deck = [];

// *********************

newGame.setup();

function checkMatches(){
  console.log(newGame.valCard);
  console.log(newGame.previousCard);
  if (newGame.valCard === newGame.previousCard){
    console.log("Good match");
    // This resets the current card to zero so
    // that it will reset the previousCard to
    // zero later in this function
    newGame.valCard = 0;
    console.log(newGame.previousCard);
  }
  else {
    $(this).addClass('facedown');
  }
    newGame.previousCard = newGame.valCard;
}

var changeCardState = function(e) {
  event.preventDefault();
  let thisCard = e.currentTarget;
  let thisCardClass = e.currentTarget.className;

  if (thisCardClass.indexOf('facedown')){
    $(this).removeClass('facedown');
  };
  newGame.valCard = e.currentTarget.innerHTML;
  checkMatches(newGame.valCard);
}

$('.card').on('click', changeCardState);
