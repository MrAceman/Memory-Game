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
    removeMatches();
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

function removeMatches(){

  for (var i = newGame.deck.length-1; i--;){
     if (newGame.deck[i] === Number(newGame.valCard)) newGame.deck.splice(i, 1);
     newGame.deck = newGame.deck;
   }
   coverCards();
 };
// newGame.valCard.each(function(){console.log(this)});
// $('.card').each(function(){
//   var currentCard = this;
// });
// $('.card').each(function(){
  // var currentCard = this;
// });

  // console.log($('.card'));
  // var thisCard = .card;
  // newGame.deck.map(function(o,i){
  //       if (currentCard.innerHTML == newGame.deck[i]){
  //           console.log(currentCard.innerHTML);
  //       console.log(newGame.deck[i])
  //       console.log($(currentCard.className));
  //       $(currentCard.className).addClass('facedown');
  //
  //     }
  // })


function coverCards(){
  var allCards = $('.card');
  let i, o; //Counters for both array loops

  console.log(allCards);

// Need to figure out how to loop through the cards on the pages... $('.card')
// and also the newGame.deck (which only contains unmatched cards).
// If the .card.innerHTML[i] matches the newGame.deck[o] then add the CSS class facedown

    allCards.forEach(function(){
});

    // newGame.deck.each(function(o){
      // if {allCards[i] === newGame.deck[o]}
      // if (allCards[i].innerHTML == newGame.deck[o]){
      // curID = allCards[i].id;
      // $(`"#${curID}"`).addClass('facedown');
      // $("#allCards[i].id").addClass('facedown');
      // $('card')[i].class('facedown');
    // }
    // });
  // })
  // for (var i = newGame.deck.length-1; i--){
  //   if (newGame.deck[i] === allCards.innerHTML)
  // }
  // $('.card').each(function(){console.log(this)});
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
