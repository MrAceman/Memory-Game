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
    removeMatches();
    newGame.valCard = 0;
    newGame.checkWin();
  }
  else if (newGame.previousCard === 0){
    newGame.previousCard = newGame.valCard;
    newGame.prevCardTarget = newGame.cardTarget;
    return;
  }
  else {
    newGame.valCard = 0;
    setTimeout(coverCards, 1500)
  }
    newGame.previousCard = newGame.valCard;
}

function removeMatches(){
  console.log(newGame.deck);
  for (var i = newGame.deck.length; i--;){
     if (newGame.deck[i] === Number(newGame.valCard)) newGame.deck.splice(i, 1);
     newGame.deck = newGame.deck;
   };
   console.log(newGame.deck);
 }

function coverCards(){
  var allCards = $('.card');
  let i, o; //Counters for both array loops
  $(newGame.cardTarget).addClass('facedown');
  $(newGame.prevCardTarget).addClass('facedown');
}

var changeCardState = function(e) {
  event.preventDefault();
  let thisCard = e.currentTarget;
  let thisCardClass = e.currentTarget.className;
  newGame.cardTarget = e.currentTarget;

  if (thisCardClass.indexOf('facedown')){
    $(this).removeClass('facedown');
  };
  newGame.valCard = e.currentTarget.innerHTML;
  checkMatches(newGame.valCard);
}

$('.card').on('click', changeCardState);
