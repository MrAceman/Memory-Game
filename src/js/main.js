import $ from 'jquery';
import _ from 'lodash';

// classes
import {Game} from './classes/game.js';
import {Score} from './classes/score.js';
import {Timer} from './classes/timer.js';

// Initialize game

let game = new Game();
let score = new Score();
let timer = new Timer();
let currentTimer = 0;
let deck = [];

// *********************

game.setup();

function checkMatches() {
    if (game.valCard === game.previousCard) {
        // removeMatches();
        game.valCard = 0;
        score.updateScore();
        score.updateGuess();
        score.checkWin();
        if (score.checkWin === true) {
            window.clearInterval(currentTimer)
        }
    } else if (game.previousCard === 0) {
        game.prevCardTarget = game.cardTarget;
        game.previousCard = game.valCard;
    } else {
        game.valCard = 0;
        score.updateGuess();
        $(".card").unbind("click");
        setTimeout(coverCards, 1500);
    }
    game.previousCard = game.valCard;
}

// Was using this to remove matches from array in order to check win status
// Figured out a better way that allowed for using non-numberic card values
// function removeMatches(){
//   for (var i = game.deck.length; i--;){
//      if (game.deck[i] === Number(game.valCard)) game.deck.splice(i, 1);
//      game.deck = game.deck;
//    };
//  }

function coverCards() {
    $(game.cardTarget).addClass('facedown');
    $(game.prevCardTarget).addClass('facedown');
    $(".card").bind("click", flipCards);
}

var flipCards = function(e) {
    e.preventDefault();
    let thisCard = e.currentTarget;
    let thisCardClass = e.currentTarget.className;
    game.cardTarget = e.currentTarget;

    if (thisCardClass.indexOf('facedown') > -1) {
        $(this).removeClass('facedown');
    } else {
        return;
    }
    game.valCard = e.currentTarget.innerHTML;
    checkMatches();
}

function updateTimer() {
    timer.timerVal++;
    $('.timer').html(`Timer</br>${timer.timerVal}`);
};

function startTimer() {
    window.interval = setInterval(updateTimer, 1000);
};

// $('.card').one('click', flipCards); //ONE allows for just one click of each card.  Does NOT reset.
$('.card').on('click', flipCards);
$('.container').one('click', startTimer);
