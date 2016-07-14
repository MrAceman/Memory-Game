import $ from 'jquery';
import _ from 'lodash';

// classes
import {Card} from './classes/card.js';
import {Game} from './classes/game.js';
import {Score} from './classes/score.js';
import {Timer} from './classes/timer.js';

// Initialize game

let newGame = new Game();
// var canvas = document.getElementById('memory');
// var ctx = canvas.getContext('2d');
//
// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext){
//     var ctx = canvas.getContext('2d');
//
//     // Cubic curves example
//     ctx.beginPath();
//     ctx.moveTo(75,40);
//     ctx.bezierCurveTo(75,37,70,25,50,25);
//     ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
//     ctx.bezierCurveTo(20,80,40,102,75,120);
//     ctx.bezierCurveTo(110,102,130,80,130,62.5);
//     ctx.bezierCurveTo(130,62.5,130,25,100,25);
//     ctx.bezierCurveTo(85,25,75,37,75,40);
//     ctx.fill();
//   }
// }


// Setup game
newGame.setup()
