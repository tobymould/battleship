"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var opponentGrid=document.querySelector("#opponent .grid"),myGrid=document.querySelector("#mine .grid"),placeShips=function(){var e=0;opponentGrid.addEventListener("click",function(){e%2==0&&("item"===event.target.className&&(event.target.innerHTML="Ship",event.target.className+=" ship"),e++),console.log(event),console.log(e)}),myGrid.addEventListener("click",function(){e%2!=0&&("item"===event.target.className&&(event.target.innerHTML="Ship",event.target.className+=" ship"),e++),console.log(event),console.log(e)})},_default=placeShips;exports.default=placeShips;