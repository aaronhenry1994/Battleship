import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';
import { Player } from '../src/players.js';
import { Computer } from '../src/players.js';

const playerBoard = document.getElementById('player-board');
const cpuBoard = document.getElementById('cpu-board');

const player_1 = new Player;
const player_2 = new Computer;

/*class GameController {

    gameTurns(player_1, player_2) {
        
    }
} */

let playerShips = [];

let shipOne = new Ship(1, 2, 1, 0, 'horizontal', false);
playerShips.push(shipOne);

let shipTwo = new Ship (4, 5, 2, 0, 'horizontal', false);
playerShips.push(shipTwo);

let shipThree = new Ship (4, 8, 2, 0, 'horizontal', false);
playerShips.push(shipTwo);

console.log(playerShips);

for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const boxDiv = document.createElement('div');
                boxDiv.id = x + '-' +y;
                boxDiv.style.width = '40px';
                boxDiv.style.height = '40px';
                boxDiv.style.backgroundColor = 'lightblue';
                boxDiv.style.border = '2px solid navy';
                boxDiv.style.margin = '1px';
                playerBoard.appendChild(boxDiv);

                if (boxDiv.id === (shipOne.x + '-' + shipOne.y)) {
                    boxDiv.style.backgroundColor = 'white';
                };
                if (boxDiv.id === (shipTwo.x + '-' + shipTwo.y)) {
                    boxDiv.style.backgroundColor = 'white';
                };
                if (boxDiv.id === (shipThree.x + '-' + shipThree.y)) {
                    boxDiv.style.backgroundColor = 'white';
                };

                boxDiv.addEventListener('click', () => {
                console.log(boxDiv.id);
                
                boxDiv.style.backgroundColor = 'red';
                
                let playerObject = {
                    x: x,
                    y: y,
                }
                console.log(x, y)
                console.log(playerObject);
                })
            };
        };

for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const boxDiv = document.createElement('div');
                boxDiv.id = x + '-' +y;
                boxDiv.style.width = '40px';
                boxDiv.style.height = '40px';
                boxDiv.style.backgroundColor = 'lightblue';
                boxDiv.style.border = '2px solid navy';
                boxDiv.style.margin = '1px';
                cpuBoard.appendChild(boxDiv);

                boxDiv.addEventListener('click', () => {
                console.log(x, y);
                console.log("Player 1 clicked");

                boxDiv.style.backgroundColor = 'red';

                let computerObject = {
                    x: x,
                    y: y,
                }
                console.log(x, y)
                console.log(computerObject);
                })
            };
        };