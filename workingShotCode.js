// Step 1 - Grab elements needed:
const opponentGrid = document.querySelector('#opponent .grid');
const myGrid = document.querySelector('#mine .grid');
// const start = document.querySelector('button');

// ---------FUNCTION 2 - SHOTSFIRED------------

const shotsFired = () => {
  let turn = 0;

  // -------------- Support Functions:---------------
  const myShot = () => {
    if (turn % 2 === 0) {
      if (event.target.className === 'item ship') {
        event.target.innerHTML = 'X';
        event.target.className += ' hit';
      } else if (event.target.className !== 'item ship') {
        event.target.innerHTML = 'O';
        event.target.className += ' miss';
      }
      turn++;
    }
    console.log(event);
    console.log(turn);
  };

  const opponentShot = () => {
    if (turn % 2 !== 0) {
      if (event.target.className === 'item ship') {
        event.target.innerHTML = 'X';
        event.target.className += ' hit';
      } else if (event.target.className !== 'item ship') {
        event.target.innerHTML = 'O';
        event.target.className += ' miss';
      }
      turn++;
    }
    console.log(event);
    console.log(turn);
  };

  // ---------Step 3 - Create Event Handlers:---------
  const opponentShotEvent = event => {
    myShot();
  };

  const myShotEvent = event => {
    opponentShot();
  };

  // -----------Step 2 - Add Event Listeners-------------
  opponentGrid.addEventListener('click', opponentShotEvent);
  myGrid.addEventListener('click', myShotEvent);
};

// shotsFired();

export default shotsFired;
