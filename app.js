import placeShips from './workingPlacementCode.js';

// Step 1 - Grab elements needed:
const items = document.querySelectorAll('.item');
const start = document.querySelector('button');

const reset = () => {
  items.forEach(item => {
    item.className = 'item';
    item.innerHTML = '';
  });
};
console.log(items);

const startGame = () => {
  reset();
  placeShips();
};

start.addEventListener('click', startGame);
