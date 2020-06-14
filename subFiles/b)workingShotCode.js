// ------------------------------//
// ---------SHOOTING CODE--------//
// ------------------------------//

import endGame from './c)endGameCode.js';

// -----1) Grab elements needed------//
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
const myItems = document.querySelectorAll('#mine .item');

//1b) instantiated variables
let turn = 0;
let myHitCount = 0;
let opponentHitCount = 0;
let iterator = 19;
// let arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// -----4) support Function Definition-----//
// for 'Random Number Generator' and 'Switch' to change to the shooting phase of the game.
const randomNumber1 = () => {
  // const randoNumber = Math.ceil(Math.random() * iterator);
  const number = Math.ceil(Math.random() * iterator);
  // const number = arrayTest[randoNumber].slice(randoNumber, randoNumber);
  // iterator--;
  return number;
};

// console.log(arrayTest);
// console.log(arrayTest.slice(2));
// console.log(randomNumber1());
// console.log(arrayTest);
// console.log(randomNumber1());
// console.log(arrayTest);
// console.log(randomNumber1());

const switchEvents = () => {
  opponentGrid.removeEventListener('click', opponentShotEvent);
  myGrid.removeEventListener('click', myShotEvent);
  endGame(); //switches to 'endGame' function (seperate file).
};

// ---------3) Event Handlers---------//
// ...will run these 2 Event Handlers for my and my opponents turns.
const opponentShotEvent = event => {
  if (turn % 2 !== 0) {
    //if turn is NOT divisible by 2 (i.e. not an even number...)

    const go = randomNumber1();
    if (myItems[go].className === 'item ship') {
      myItems[go].innerHTML = 'X';
      myItems[go].className += ' hit';
      turn++;
      myHitCount++;
      // console.log(`my Hit Count: ${myHitCount}`);
      if (myHitCount >= 4) {
        //if the 'myHitCount' variable >= 4 (coz only 4 ships)...
        return switchEvents(); //...run the 'switchEvents' support function.
      }
    } else if (myItems[go].className !== 'item ship') {
      myItems[go].innerHTML = 'O';
      myItems[go].className += ' miss';
      turn++;
    }
    console.log(`Opponent Hit Count: ${opponentHitCount}`);
    console.log(`my Hit Count: ${myHitCount}`);
  }
  // console.log(event);
  // console.log(turn);
};

const myShotEvent = event => {
  if (turn % 2 === 0) {
    //if turn IS divisible by 2 (i.e. an even number...)

    if (event.target.className === 'item shipOpp') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      opponentHitCount++;
      // console.log(`Opponent Hit Count: ${opponentHitCount}`);
      if (opponentHitCount >= 4) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item shipOpp') {
      event.target.innerHTML = 'O';
      event.target.className += ' miss';
      turn++;
    }
    console.log(`Opponent Hit Count: ${opponentHitCount}`);
    console.log(`my Hit Count: ${myHitCount}`);
  }
  // console.log(event);
  // console.log(turn);
};

// ------------SHOOTING SUPPORT FUNCTION------------//
// ------2) The event listener, when triggered,...-------//
const shotsFired = () => {
  opponentGrid.addEventListener('click', myShotEvent);
  myGrid.addEventListener('click', opponentShotEvent);
  console.log(`my Hit Count: ${myHitCount}`);
  console.log(`Opponent Hit Count: ${opponentHitCount}`);
};

// shotsFired();

export default shotsFired; // Exports the 'shotsFired' support function.
