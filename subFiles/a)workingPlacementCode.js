// ------------------------------//
// -----SHIP PLACEMENT CODE------//
// ------------------------------//

import shotsFired from './b)workingShotCode.js';

// -----1) Grab elements needed------//
const opponentGrid = document.querySelector('#opponent .grid');
const opponentItems = document.querySelectorAll('#opponent .item');
const myGrid = document.querySelector('#mine .grid');
const head = document.querySelector('head');

//1b) instantiated variables
let turn = 0;
let iterator = 19;

// -----4) support Function Definition-----//
// for 'Random Number Generator' and 'Switch' to change to the shooting phase of the game.
const randomNumber = () => {
  const number = Math.ceil(Math.random() * iterator);
  // iterator--;
  return number;
};

const switchEvents = () => {
  opponentGrid.removeEventListener('click', opponentPlacementEvent);
  myGrid.removeEventListener('click', myPlacementEvent);
  shotsFired(); //switches to 'shotsFired' function (seperate file).
};

// ---------3) Event Handlers---------//
// ...will run these 2 Event Handlers for my and my opponents turns.
const opponentPlacementEvent = event => {
  if (turn % 2 !== 0) {
    //if turn is NOT divisible by 2 (i.e. not an even number...)
    const go = randomNumber();
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

const myPlacementEvent = event => {
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
};

// ------------PLACING SHIPS SUPPORT FUNCTION------------//
// ------2) The event listener, when triggered,...-------//
const placeShips = () => {
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
};

export default placeShips; // Exports the 'placeShips' support function.

// LESSONS:
// Don't need in include function definitions inside a called function, just the CALLOUTS for those functions should be included!
//Include a SwitchEvent function that removes event listeners from the current function being called, so that it will move on once complete.
// Focus on Visuals
