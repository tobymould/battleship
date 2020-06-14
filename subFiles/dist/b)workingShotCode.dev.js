"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cEndGameCode = _interopRequireDefault(require("./c)endGameCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ------------------------------//
// ---------SHOOTING CODE--------//
// ------------------------------//
// -----1) Grab elements needed------//
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid');
var myItems = document.querySelectorAll('#mine .item'); //1b) instantiated variables

var turn = 0;
var myHitCount = 0;
var opponentHitCount = 0;
var iterator = 19; // let arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// -----4) support Function Definition-----//
// for 'Random Number Generator' and 'Switch' to change to the shooting phase of the game.

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
  (0, _cEndGameCode["default"])(); //switches to 'endGame' function (seperate file).
}; // ---------3) Event Handlers---------//
// ...will run these 2 Event Handlers for my and my opponents turns.


var opponentShotEvent = function opponentShotEvent(event) {
  if (turn % 2 !== 0) {
    //if turn is NOT divisible by 2 (i.e. not an even number...)
    var go = randomNumber1();

    if (myItems[go].className === 'item ship') {
      myItems[go].innerHTML = 'X';
      myItems[go].className += ' hit';
      turn++;
      myHitCount++; // console.log(`my Hit Count: ${myHitCount}`);

      if (myHitCount >= 4) {
        //if the 'myHitCount' variable >= 4 (coz only 4 ships)...
        return switchEvents(); //...run the 'switchEvents' support function.
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
    //if turn IS divisible by 2 (i.e. an even number...)
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

}; // ------------SHOOTING SUPPORT FUNCTION------------//
// ------2) The event listener, when triggered,...-------//


var shotsFired = function shotsFired() {
  opponentGrid.addEventListener('click', myShotEvent);
  myGrid.addEventListener('click', opponentShotEvent);
  console.log("my Hit Count: ".concat(myHitCount));
  console.log("Opponent Hit Count: ".concat(opponentHitCount));
}; // shotsFired();


var _default = shotsFired; // Exports the 'shotsFired' support function.

exports["default"] = _default;