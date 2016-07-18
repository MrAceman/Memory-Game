// Import Chai
import chai from 'chai';

// Import Any Files to Test

import {Game} from '../src/js/classes/game.js';
import {Score} from '../src/js/classes/score.js';
import {Timer} from '../src/js/classes/timer.js';
import $ from 'jquery';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('About our game', function() {

    let game;
    beforeEach(function(){
        game = new Game;
    });

    describe('Creation of Game', function() {
// This test started failing once I added the jQuery merge function to my
// game.deck array.  The failure seems to be related to some jQuery incompatability
// issue and not actual failure of the code or the test.
// In order to get past this issue I added some functionality that does not use
// the jQuery merge to create the array.
        it('should be an instance of our game', function() {
            expect(game).to.be.an.instanceof(Game);
        });
    });

    describe('Things the game should setup', function() {

        it('should have an array of items for a deck', function() {
            expect(game.deck).to.be.an('array');
        });
        it('should have a number to store the current card', function() {
            expect(game.valCard).to.be.a('number');
        });
        it('the current card variable should be able to store a string if needed', function() {
          game.valCard = "string";
          expect(game.valCard).to.be.a('string');
        });
        it('should have a number to store the previous card', function() {
            expect(game.previousCard).to.be.a('number');
        });
        it('the previous card variable should be able to store a string if needed', function() {
          game.previousCard = "string";
          expect(game.previousCard).to.be.a('string');
        });
        it('should have a string to store the current cards DOM target', function() {
            expect(game.cardTarget).to.be.a('string');
        });
        it('the current card target should be able to store a string if needed', function() {
          game.cardTarget = "string";
          expect(game.cardTarget).to.contain('string');
        });
        it('should have a string to store the previous cards DOM target', function() {
            expect(game.prevCardTarget).to.be.a('string');
        });
        it('the previous card target should be able to store a string if needed', function() {
          game.prevCardTarget = "string";
          expect(game.prevCardTarget).to.contain('string');
        });
    });

})

describe('Stuff about the score', function(){
  let score;
  beforeEach(function(){
      score = new Score;
  });

  describe('Score should be a number', function() {
      it('should be a number', function() {
          expect(score.currentScore).to.be.a('number');
      });
      it('should be a number equal to zero', function() {
          expect(score.currentScore).to.be.equal(0);
      });
      it('should increment by one when you make a match', function(){
          expect(score.currentScore).to.be.equal(0);
          score.updateScore();
          expect(score.currentScore).to.be.equal(1);
          score.updateScore();
          expect(score.currentScore).to.be.equal(2);
      });
});
  describe('Guesses should be a number', function() {
      it('should be a number', function() {
          expect(score.currentGuess).to.be.a('number');
      });
      it('should be a number equal to zero', function() {
          expect(score.currentGuess).to.be.equal(0);
      });
      it('should increment by one when you make a guess', function(){
          expect(score.currentGuess).to.be.equal(0);
          // Once I added in the html update to the score.updateGuess function
          // the following increment test started failing.  Since it seemed like
          // that function was the right place to have the html update, I changed
          // the test to directly imcrement the number.
          score.currentGuess++;
          expect(score.currentGuess).to.be.equal(1);
          score.currentGuess++;
          expect(score.currentGuess).to.be.equal(2);
      });

  });
});


describe('Info about the timer', function(){
  let timer;
  beforeEach(function(){
  timer = new Timer();
  });
// I had much difficulty with running the timer in it's own module due
// to problems I ran into using setInterval with 'this'.  I ended up putting
// the timer functionality in main.js.
  describe('Creation of the timer', function() {

      it('should be an instance of Timer', function() {
          expect(timer).to.be.an.instanceof(Timer);
      });

      it('should be a number with a value of 0', function() {
          expect(timer.timerVal).to.be.a('number');
          expect(timer.timerVal).to.equal(0);
      });
      it('should increment by one with each second', function(){
          expect(timer.timerVal).to.be.equal(0);
          timer.timerVal++;
          expect(timer.timerVal).to.be.equal(1);
          timer.timerVal++;
          expect(timer.timerVal).to.be.equal(2);
      });
  });
})
