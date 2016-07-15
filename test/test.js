// Import Chai
import chai from 'chai';

// Import Any Files to Test

import {Game} from '../src/js/classes/game.js';
import {Card} from '../src/js/classes/card.js';
import {Score} from '../src/js/classes/score.js';
import {Timer} from '../src/js/classes/timer.js';

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

        it('should be an instance of our game', function() {
            expect(game).to.be.an.instanceof(Game);
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
  });
})

describe('Stuff about the card', function() {

    let card;
    beforeEach(function(){
        card = new Card;
    });

    describe('Creation of a card', function() {

        it('should be an instance of Card', function() {
            expect(card).to.be.an.instanceof(Card);
        });
    });
})

describe('Info about the timer', function(){

  describe('Creation of the timer', function() {

      it('should be an instance of Timer', function() {
          let timer = new Timer();
          expect(timer).to.be.an.instanceof(Timer);
      });

      it('should be a number with a value of 0', function() {
          let timer = new Timer();
          expect(timer.value).to.be.a('number');
          expect(timer.value).to.equal(0);
      });

  });
})
