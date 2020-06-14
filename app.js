// MAIN APP PAGE
import placeShips from './subFiles/a)workingPlacementCode.js';

// 1. Grab elements needed:
const items = document.querySelectorAll('.item');
const start = document.querySelector('button');

// 4. support Function Definition for 'resetting' the game.
const reset = () => {
  items.forEach(item => {
    item.className = 'item';
    item.innerHTML = '';
  });
};
console.log(items);

// 3. ...will set this overall 'StartGame' Event Handler to run.
const startGame = () => {
  reset(); //callout to 'reset' support function
  placeShips(); //callout to the 'placeShips' support function (seperate file)
};

// 2. The event listener, when triggered,...
start.addEventListener('click', startGame);
