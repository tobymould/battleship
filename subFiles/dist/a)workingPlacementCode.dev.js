"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bWorkingShotCode = _interopRequireDefault(require("./b)workingShotCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ------------------------------//
// -----SHIP PLACEMENT CODE------//
// ------------------------------//
// -----1) Grab elements needed------//
var opponentGrid = document.querySelector('#opponent .grid');
var opponentItems = document.querySelectorAll('#opponent .item');
var myGrid = document.querySelector('#mine .grid');
var head = document.querySelector('head'); //1b) instantiated variables

var turn = 0;
var iterator = 19; // -----4) support Function Definition-----//
// for 'Random Number Generator' and 'Switch' to change to the shooting phase of the game.

var randomNumber = function randomNumber() {
  var number = Math.ceil(Math.random() * iterator); // iterator--;

  return number;
};

var switchEvents = function switchEvents() {
  opponentGrid.removeEventListener('click', opponentPlacementEvent);
  myGrid.removeEventListener('click', myPlacementEvent);
  (0, _bWorkingShotCode["default"])(); //switches to 'shotsFired' function (seperate file).
}; // ---------3) Event Handlers---------//
// ...will run these 2 Event Handlers for my and my opponents turns.


var opponentPlacementEvent = function opponentPlacementEvent(event) {
  if (turn % 2 !== 0) {
    //if turn is NOT divisible by 2 (i.e. not an even number...)
    var go = randomNumber();

    if (opponentItems[go].className === 'item') {
      console.log(event.index);
      opponentItems[go].innerHTML = 'Ship';
      opponentItems[go].className += ' shipOpp';
      turn++;

      if (turn >= 7) {
        //if the 'turn' variable >= 7 (coz each place 4 ships)...
        return switchEvents(); //...run the 'switchEvents' support function.
      }
    }
  }

  console.log(event);
  console.log(turn);
};

var myPlacementEvent = function myPlacementEvent(event) {
  if (turn % 2 === 0) {
    //if turn IS divisible by 2 (i.e. an even number...)
    if (event.target.className === 'item') {
      event.target.innerHTML = 'Ship';
      event.target.className += ' ship';
      turn++;
    }
  }

  console.log(event);
  console.log(turn);
}; // ------------PLACING SHIPS SUPPORT FUNCTION------------//
// ------2) The event listener, when triggered,...-------//


var placeShips = function placeShips() {
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
};

var _default = placeShips; // Exports the 'placeShips' support function.
// LESSONS:
// Don't need in include function definitions inside a called function, just the CALLOUTS for those functions should be included!
//Include a SwitchEvent function that removes event listeners from the current function being called, so that it will move on once complete.
// Focus on Visuals

exports["default"] = _default;