"use strict";

// Step 1 - Grab elements needed:
var opponentGrid = document.querySelector('#opponent .grid');
var myGrid = document.querySelector('#mine .grid');
var start = document.querySelector('button'); // ------------FUNCTION 1 - PLACING SHIPS------------
// const placeShips = placementTurn => {

var placementTurn = 0;

if (placementTurn % 2 !== 0) {
  var _opponentShipPlaceEvent = function _opponentShipPlaceEvent() {
    if (placementTurn < 10) {
      event.target.className += ' ship';
    }

    placementTurn++;
  };

  console.log(event);
  console.log(placementTurn);
} else {
  var myShipPlaceEvent = function myShipPlaceEvent() {
    if (placementTurn % 2 === 0 && placementTurn < 10) {
      event.target.className += ' ship';
    }

    placementTurn++;
  };

  console.log(event);
  console.log(placementTurn);
  opponentGrid.addEventListener('click', opponentShipPlaceEvent);
  myGrid.addEventListener('click', myShipPlaceEvent);
} // return placementTurn;
// Step 2 - Add Event Listeners
// };
// };
// ---------FUNCTION 2 - SHOTSFIRED------------
// const shotsFired = () => {
//   let turn = 0;
//   // Step 4 - Support Functions:
//   const myShot = () => {
//     if (turn % 2 === 0) {
//       if (event.target.innerHTML === 'content') {
//         event.target.innerHTML = 'X';
//         event.target.className += ' hit';
//       } else if (event.target.innerHTML === '') {
//         event.target.innerHTML = 'O';
//         event.target.className += ' miss';
//       }
//       turn++;
//     }
//     console.log(event);
//     console.log(turn);
//   };
//   const opponentShot = () => {
//     if (turn % 2 !== 0) {
//       if (event.target.innerHTML === 'content') {
//         event.target.innerHTML = 'X';
//         event.target.className += ' hit';
//       } else {
//         event.target.innerHTML = 'O';
//         event.target.className += ' miss';
//       }
//       turn++;
//     }
//     console.log(event);
//     console.log(turn);
//   };
//   // Step 3 - Create Event Handlers:
//   const opponentShotEvent = event => {
//     myShot();
//   };
//   const myShotEvent = event => {
//     opponentShot();
//   };
//   // Step 2 - Add Event Listeners
//   opponentGrid.addEventListener('click', opponentShotEvent);
//   myGrid.addEventListener('click', myShotEvent);
// };
//------------FUNCTION 3 - OVERALL PARENT START GAME FUNCTION------------
// const startGame = () => {
//   console.log('game started');
//   let placementTurn = 0;
//   placeShips();
//   for (i = 0; i < 10; i++)
//     if (placementTurn < 10) {
//       placeShips();
//     } else {
//       return;
//     }
//   console.log('past placeShips function now');
//   shotsFired();
// };
// start.addEventListener('click', startGame);
//
//----------------------------------------------------------------
//----------------------------------------------------------------
//

/*let opponentGridRecord = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

let myGridRecord = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

create an array for each board to store the ship location in?
make the ship colour a block.
if first put down, make it add 5 colour in line to surronding numbers

const ships: {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
}
*/