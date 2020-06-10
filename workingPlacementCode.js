import shotsFired from './workingShotCode.js';

// Step 1 - Grab elements needed:
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
// const start = document.querySelector('button');
let turn = 0;

const switchEvents = () => {
  opponentGrid.removeEventListener('click', opponentPlacementEvent);
  myGrid.removeEventListener('click', myPlacementEvent);
  shotsFired();
};

// ---------Step 3: Event Handlers---------
const opponentPlacementEvent = event => {
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

const myPlacementEvent = event => {
  if (turn % 2 === 0) {
    if (event.target.className === 'item') {
      event.target.innerHTML = 'Ship';
      event.target.className += ' ship';
      turn++;
    }
  }
  console.log(event);
  console.log(turn);
};

// ------------FUNCTION 1 - PLACING SHIPS------------
const placeShips = () => {
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
};

// placeShips();

export default placeShips;

// LESSONS:
// Don't need in include function definitions inside a called function, just the CALLOUTS for those functions should be included!
//Include a SwitchEvent function that removes event listeners from the current function being called, so that it will move on once complete.
