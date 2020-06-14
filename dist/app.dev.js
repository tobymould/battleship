"use strict";

var _aWorkingPlacementCode = _interopRequireDefault(require("./subFiles/a)workingPlacementCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// MAIN APP PAGE
// 1. Grab elements needed:
var items = document.querySelectorAll('.item');
var start = document.querySelector('button'); // 4. support Function Definition for 'resetting' the game.

var reset = function reset() {
  items.forEach(function (item) {
    item.className = 'item';
    item.innerHTML = '';
  });
};

console.log(items); // 3. ...will set this overall 'StartGame' Event Handler to run.

var startGame = function startGame() {
  reset(); //callout to 'reset' support function

  (0, _aWorkingPlacementCode["default"])(); //callout to the 'placeShips' support function (seperate file)
}; // 2. The event listener, when triggered,...


start.addEventListener('click', startGame);