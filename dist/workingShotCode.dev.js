"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _endGameCode = _interopRequireDefault(require("./endGameCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid');
var myItems = document.querySelectorAll('#mine .item'); // const start = document.querySelector('button');

var turn = 0;
var myHitCount = 0;
var opponentHitCount = 0;
var iterator = 19; // let arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var randomNumber1 = function randomNumber1() {
  // const randoNumber = Math.ceil(Math.random() * iterator);
  var number = Math.ceil(Math.random() * iterator); // const number = arrayTest[randoNumber].slice(randoNumber, randoNumber);
  // iterator--;

  return number;
}; // console.log(arrayTest);
// console.log(arrayTest.slice(2));
// console.log(randomNumber1());
// console.log(arrayTest);
// console.log(randomNumber1());
// console.log(arrayTest);
// console.log(randomNumber1());


var switchEvents = function switchEvents() {
  opponentGrid.removeEventListener('click', opponentShotEvent);
  myGrid.removeEventListener('click', myShotEvent);
  (0, _endGameCode["default"])();
}; // ---------Step 3: Event Handlers---------


var opponentShotEvent = function opponentShotEvent(event) {
  if (turn % 2 !== 0) {
    var go = randomNumber1();

    if (myItems[go].className === 'item ship') {
      myItems[go].innerHTML = 'X';
      myItems[go].className += ' hit';
      turn++;
      myHitCount++; // console.log(`my Hit Count: ${myHitCount}`);

      if (myHitCount >= 4) {
        return switchEvents();
      }
    } else if (myItems[go].className !== 'item ship') {
      myItems[go].innerHTML = 'O';
      myItems[go].className += ' miss';
      turn++;
    }

    console.log("Opponent Hit Count: ".concat(opponentHitCount));
    console.log("my Hit Count: ".concat(myHitCount));
  } // console.log(event);
  // console.log(turn);

};

var myShotEvent = function myShotEvent(event) {
  if (turn % 2 === 0) {
    if (event.target.className === 'item shipOpp') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      opponentHitCount++; // console.log(`Opponent Hit Count: ${opponentHitCount}`);

      if (opponentHitCount >= 4) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item shipOpp') {
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
  opponentGrid.addEventListener('click', myShotEvent);
  myGrid.addEventListener('click', opponentShotEvent);
  console.log("my Hit Count: ".concat(myHitCount));
  console.log("Opponent Hit Count: ".concat(opponentHitCount));
}; // shotsFired();


var _default = shotsFired;
exports["default"] = _default;