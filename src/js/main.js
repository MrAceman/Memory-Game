import $ from 'jquery';
import _ from 'lodash';

// classes
import {Card} from './classes/card.js';
import {Game} from './classes/game.js';
import {Score} from './classes/score.js';
import {Timer} from './classes/timer.js';

// Initialize game

let newGame = new Game();
let score = new Score();
let deck = [];

// *********************

newGame.setup();

function checkMatches(){
  if (newGame.valCard === newGame.previousCard){
    console.log("Check1");
    removeMatches();
    newGame.valCard = 0;
    console.log(score.currentScore);
    score.currentScore ++;
    console.log(score.currentScore);
    score.checkWin();
    // newGame.previousCard = newGame.valCard;
  }
  else if (newGame.previousCard === 0){
    console.log("Check2");
    newGame.prevCardTarget = newGame.cardTarget;
    newGame.previousCard = newGame.valCard;
    // return;
  }
  else {
    newGame.valCard = 0;
    console.log("Check3");
    // $('.card').off();
    setTimeout(coverCards, 1500);
    // newGame.previousCard = newGame.valCard;
    // return;
  }
    newGame.previousCard = newGame.valCard;
    // e.click = e._click;
    // e._click = null;

}

function removeMatches(){
  for (var i = newGame.deck.length; i--;){
     if (newGame.deck[i] == newGame.valCard) newGame.deck.splice(i, 1);
     newGame.deck = newGame.deck;
   };
 }

 // function removeMatches(){
 //   console.log(newGame.deck);
 //   for (var i = newGame.deck.length; i--;){
 //      if (newGame.deck[i] === Number(newGame.valCard)) newGame.deck.splice(i, 1);
 //      newGame.deck = newGame.deck;
 //    };
 //    console.log(newGame.deck);
 //  }

function coverCards(){
  $(newGame.cardTarget).addClass('facedown');
  $(newGame.prevCardTarget).addClass('facedown');
  // e.click = e._click;
  // e._click = null;

}

var changeCardState = function(e) {
  event.preventDefault();
  console.log('Change card start');
  let thisCard = e.currentTarget;
  let thisCardClass = e.currentTarget.className;
  newGame.cardTarget = e.currentTarget;

  if (thisCardClass.indexOf('facedown')){
    $(this).removeClass('facedown');
  };
  newGame.valCard = e.currentTarget.innerHTML;
  checkMatches();
}

// $('.card').one('click', changeCardState); //ONE allows for just one click of each card.  Does NOT reset.
$('.card').on('click', changeCardState);
