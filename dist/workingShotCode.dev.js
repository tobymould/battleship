"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid'); // const start = document.querySelector('button');
// ---------FUNCTION 2 - SHOTSFIRED------------

var shotsFired = function shotsFired() {
  var turn = 0; // -------------- Support Functions:---------------

  var myShot = function myShot() {
    if (turn % 2 === 0) {
      if (event.target.className === 'item ship') {
        event.target.innerHTML = 'X';
        event.target.className += ' hit';
      } else if (event.target.className !== 'item ship') {
        event.target.innerHTML = 'O';
        event.target.className += ' miss';
      }

      turn++;
    }

    console.log(event);
    console.log(turn);
  };

  var opponentShot = function opponentShot() {
    if (turn % 2 !== 0) {
      if (event.target.className === 'item ship') {
        event.target.innerHTML = 'X';
        event.target.className += ' hit';
      } else if (event.target.className !== 'item ship') {
        event.target.innerHTML = 'O';
        event.target.className += ' miss';
      }

      turn++;
    }

    console.log(event);
    console.log(turn);
  }; // ---------Step 3 - Create Event Handlers:---------


  var opponentShotEvent = function opponentShotEvent(event) {
    myShot();
  };

  var myShotEvent = function myShotEvent(event) {
    opponentShot();
  }; // -----------Step 2 - Add Event Listeners-------------


  opponentGrid.addEventListener('click', opponentShotEvent);
  myGrid.addEventListener('click', myShotEvent);
}; // shotsFired();


var _default = shotsFired;
exports["default"] = _default;