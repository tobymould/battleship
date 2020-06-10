"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _workingShotCode = _interopRequireDefault(require("./workingShotCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid'); // const start = document.querySelector('button');

var switchEvents = function switchEvents() {
  myGrid.removeEventListener('click', myPlacementEvent);
  opponentGrid.removeEventListener('click', myPlacementEvent);
  (0, _workingShotCode["default"])();
};

var turn = 0; // ---------Step 3 - Create Event Handlers:---------

var opponentPlacementEvent = function opponentPlacementEvent(event) {
  if (turn % 2 !== 0) {
    if (event.target.className === 'item') {
      event.target.innerHTML = 'Ship';
      event.target.className += ' ship';
      turn++;

      if (turn >= 7) {
        return switchEvents();
      }
    }
  }

  console.log(event);
  console.log(turn);
};

var myPlacementEvent = function myPlacementEvent(event) {
  if (turn % 2 === 0) {
    if (event.target.className === 'item') {
      event.target.innerHTML = 'Ship';
      event.target.className += ' ship';
      turn++;
    }
  }

  console.log(event);
  console.log(turn);
}; // ------------FUNCTION 1 - PLACING SHIPS------------


var placeShips = function placeShips() {
  // -----------Step 2 - Add Event Listeners-------------
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
}; // placeShips();


var _default = placeShips; // LESSONS:
// Don't need in include function definitions inside a called function, just the CALLOUTS for those functions should be included!
//Include a SwitchEvent function that removes event listeners from the current function being called, so that it will move on once complete.

exports["default"] = _default;