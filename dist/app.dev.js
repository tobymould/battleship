"use strict";

var _workingPlacementCode = _interopRequireDefault(require("./workingPlacementCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var items = document.querySelectorAll('.item');
var start = document.querySelector('button');

var reset = function reset() {
  items.forEach(function (item) {
    item.className = 'item';
    item.innerHTML = '';
  });
};

console.log(items);

var startGame = function startGame() {
  reset();
  (0, _workingPlacementCode["default"])();
};

start.addEventListener('click', startGame);