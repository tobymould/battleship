"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid'); // const start = document.querySelector('button');
// ------------FUNCTION 1 - PLACING SHIPS------------

var placeShips = function placeShips() {
  var turn = 0; // -------------- Support Functions:---------------

  var myPlacement = function myPlacement() {
    if (turn % 2 === 0) {
      if (event.target.className === 'item') {
        event.target.innerHTML = 'Ship';
        event.target.className += ' ship';
      }

      turn++;
    }

    console.log(event);
    console.log(turn);
  };

  var opponentPlacement = function opponentPlacement() {
    if (turn % 2 !== 0) {
      if (event.target.className === 'item') {
        event.target.innerHTML = 'Ship';
        event.target.className += ' ship';
      }

      turn++;
    }

    console.log(event);
    console.log(turn);
  }; // ---------Step 3 - Create Event Handlers:---------


  var opponentPlacementEvent = function opponentPlacementEvent(event) {
    myPlacement();
  };

  var myPlacementEvent = function myPlacementEvent(event) {
    opponentPlacement();
  }; // -----------Step 2 - Add Event Listeners-------------


  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
}; // placeShips();


var _default = placeShips;
exports["default"] = _default;