"use strict";

var _workingPlacementCode = _interopRequireDefault(require("./workingPlacementCode.js"));

var _workingShotCode = _interopRequireDefault(require("./workingShotCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid');
var start = document.querySelector('button');

var startGame = function startGame() {
  console.log('game started');
  (0, _workingPlacementCode["default"])();
  console.log('past placeShips function now');
  (0, _workingShotCode["default"])();
  console.log('past shotsFired function now');
};

start.addEventListener('click', startGame);