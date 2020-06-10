// Step 1 - Grab elements needed:
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
// const start = document.querySelector('button');

// ------------FUNCTION 1 - PLACING SHIPS------------
const placeShips = () => {
  let turn = 0;

  // -------------- Support Functions:---------------
  const myPlacement = () => {
    if (turn % 2 === 0) {
      if (event.target.className === 'item') {
        event.target.innerHTML = 'Ship';
        event.target.className += ' ship';
      }
      turn++;
    }
    console.log(event);
    console.log(turn);
  };

  const opponentPlacement = () => {
    if (turn % 2 !== 0) {
      if (event.target.className === 'item') {
        event.target.innerHTML = 'Ship';
        event.target.className += ' ship';
      }
      turn++;
    }
    console.log(event);
    console.log(turn);
  };

  // ---------Step 3 - Create Event Handlers:---------
  const opponentPlacementEvent = event => {
    myPlacement();
  };

  const myPlacementEvent = event => {
    opponentPlacement();
  };

  // -----------Step 2 - Add Event Listeners-------------
  opponentGrid.addEventListener('click', opponentPlacementEvent);
  myGrid.addEventListener('click', myPlacementEvent);
};

// placeShips();

export default placeShips;
