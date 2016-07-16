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
  if (newGame.valCard === newGame.previousCard){
    console.log("Inside if 1 - match");
    console.log(newGame.deck);
    for (var i = newGame.deck.length-1; i--;){
	     if (newGame.deck[i] === Number(newGame.valCard)) newGame.deck.splice(i, 1);
       newGame.deck = newGame.deck;
     }
  newGame.valCard.each(function(){console.log(this)});
  // $('.card').each(function(){console.log(this)});
    newGame.valCard = 0;
  }
  else if (newGame.previousCard === 0){
    console.log('inside elseif2 - prev card 0');
    console.log(newGame.valCard);
    console.log(newGame.previousCard);
    newGame.previousCard = newGame.valCard;
    return;
  }

  else {
    console.log('inside else3 - no match ');
    console.log(newGame.valCard);
    console.log(newGame.previousCard);
    newGame.valCard = 0;
    $(this).addClass('facedown');
  }
    newGame.previousCard = newGame.valCard;
    console.log('After if is completed');
    console.log(newGame.previousCard);
    console.log(newGame.valCard);
}

// function removeMatches(card){
//
// }

// function coverCards(){
//   $('.card').each(function(){console.log(this)});
// }

var changeCardState = function(e) {
  event.preventDefault();
  // console.log(e);
  let thisCard = e.currentTarget;
  let thisCardClass = e.currentTarget.className;

  if (thisCardClass.indexOf('facedown')){
    // console.log(this);
    $(this).removeClass('facedown');
  };
  newGame.valCard = e.currentTarget.innerHTML;
  checkMatches(newGame.valCard);
}


$('.card').on('click', changeCardState);
