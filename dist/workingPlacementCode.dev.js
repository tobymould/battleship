"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _workingShotCode = _interopRequireDefault(require("./workingShotCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var opponentItems = document.querySelectorAll('#opponent .item');
var myGrid = document.querySelector('#mine .grid');
var head = document.querySelector('head');
var turn = 0;
var iterator = 19;

var randomNumber = function randomNumber() {
  var number = Math.ceil(Math.random() * iterator); // iterator--;

  return number;
};

var switchEvents = function switchEvents() {
  opponentGrid.removeEventListener('click', opponentPlacementEvent);
  myGrid.removeEventListener('click', myPlacementEvent);
  (0, _workingShotCode["default"])();
}; // ---------Step 3: Event Handlers---------


var opponentPlacementEvent = function opponentPlacementEvent(event) {
  if (turn % 2 !== 0) {
    var go = randomNumber();

    if (opponentItems[go].className === 'item') {
      console.log(event.index);
      opponentItems[go].innerHTML = 'Ship';
      opponentItems[go].className += ' shipOpp';
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
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
}; // placeShips();


var _default = placeShips; // LESSONS:
// Don't need in include function definitions inside a called function, just the CALLOUTS for those functions should be included!
//Include a SwitchEvent function that removes event listeners from the current function being called, so that it will move on once complete.
// Focus on Visuals

exports["default"] = _default;