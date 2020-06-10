import placeShips from './workingPlacementCode.js';
import shotsFired from './workingShotCode.js';

// Step 1 - Grab elements needed:
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
const start = document.querySelector('button');

const startGame = () => {
  console.log('game started');
  placeShips();
  console.log('past placeShips function now');
  shotsFired();
  console.log('past shotsFired function now');
};

start.addEventListener('click', startGame);
