import endGame from './endGameCode.js';

// Step 1 - Grab elements needed:
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
// const start = document.querySelector('button');
let turn = 0;
let myHitCount = 0;
let opponentHitCount = 0;

const switchEvents = () => {
  opponentGrid.removeEventListener('click', opponentShotEvent);
  myGrid.removeEventListener('click', myShotEvent);
  endGame();
};

// ---------Step 3: Event Handlers---------
const opponentShotEvent = event => {
  if (turn % 2 !== 0) {
    if (event.target.className === 'item ship') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      myHitCount++;
      // console.log(`my Hit Count: ${myHitCount}`);
      if (myHitCount >= 2) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item ship') {
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

const myShotEvent = event => {
  if (turn % 2 === 0) {
    if (event.target.className === 'item ship') {
      event.target.innerHTML = 'X';
      event.target.className += ' hit';
      turn++;
      opponentHitCount++;
      // console.log(`Opponent Hit Count: ${opponentHitCount}`);
      if (opponentHitCount >= 2) {
        return switchEvents();
      }
    } else if (event.target.className !== 'item ship') {
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

// ---------FUNCTION 2 - SHOTSFIRED------------
const shotsFired = () => {
  opponentGrid.addEventListener('click', opponentShotEvent);
  myGrid.addEventListener('click', myShotEvent);
  console.log(`my Hit Count: ${myHitCount}`);
  console.log(`Opponent Hit Count: ${opponentHitCount}`);
};

// shotsFired();

export default shotsFired;
