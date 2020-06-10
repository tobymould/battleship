"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _endGameCode = _interopRequireDefault(require("./endGameCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid'); // const start = document.querySelector('button');

var turn = 0;
var myHitCount = 0;
var opponentHitCount = 0;

var switchEvents = function switchEvents() {
  opponentGrid.removeEventListener('click', opponentShotEvent);
  myGrid.removeEventListener('click', myShotEvent);
  (0, _endGameCode["default"])();
}; // ---------Step 3: Event Handlers---------


var opponentShotEvent = function opponentShotEvent(event) {
  if (turn % 2 !== 0) {
    if (event.target.className === 'item ship') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      myHitCount++; // console.log(`my Hit Count: ${myHitCount}`);

      if (myHitCount >= 2) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item ship') {
      event.target.innerHTML = 'O';
      event.target.className += ' miss';
      turn++;
    }

    console.log("Opponent Hit Count: ".concat(opponentHitCount));
    console.log("my Hit Count: ".concat(myHitCount));
  } // console.log(event);
  // console.log(turn);

};

var myShotEvent = function myShotEvent(event) {
  if (turn % 2 === 0) {
    if (event.target.className === 'item ship') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      opponentHitCount++; // console.log(`Opponent Hit Count: ${opponentHitCount}`);

      if (opponentHitCount >= 2) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item ship') {
      event.target.innerHTML = 'O';
      event.target.className += ' miss';
      turn++;
    }

    console.log("Opponent Hit Count: ".concat(opponentHitCount));
    console.log("my Hit Count: ".concat(myHitCount));
  } // console.log(event);
  // console.log(turn);

}; // ---------FUNCTION 2 - SHOTSFIRED------------


var shotsFired = function shotsFired() {
  opponentGrid.addEventListener('click', opponentShotEvent);
  myGrid.addEventListener('click', myShotEvent);
  console.log("my Hit Count: ".concat(myHitCount));
  console.log("Opponent Hit Count: ".concat(opponentHitCount));
}; // shotsFired();


var _default = shotsFired;
exports["default"] = _default;