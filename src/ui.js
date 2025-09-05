import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';
import { Player } from '../src/players.js';
import { Computer } from '../src/players.js';

const playerBoard = document.getElementById('player-board');
const cpuBoard = document.getElementById('cpu-board');

let player1Board = new Gameboard;
player1Board.placeShip(3, 4, 2, 'vertical');

let playerShips = [];
let cpuShips = [];

let shipOne = new Ship(1, 2, 1, 0, 'horizontal', false);
playerShips.push(shipOne);

let shipTwo = new Ship (4, 5, 2, 0, 'vertical', false);
playerShips.push(shipTwo);

let shipThree = new Ship (4, 8, 2, 0, 'horizontal', false);
playerShips.push(shipTwo);

console.log(playerShips);

let cpuShipOne = new Ship(1, 2, 1, 0, 'horizontal', false);
cpuShips.push(cpuShipOne);

let cpuShipTwo = new Ship (4, 5, 2, 0, 'vertical', false);
cpuShips.push(cpuShipTwo);

let cpuShipThree = new Ship (4, 8, 2, 0, 'horizontal', false);
cpuShips.push(cpuShipThree);

console.log(cpuShips);

player1Board.createBoard = function() {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const boxDiv = document.createElement('div');
            boxDiv.id = x + '-' + y;
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
                e.preventDefault();
                
                if (
                    boxDiv.id === (shipOne.x + '-' + cpuShipOne.y) ||
                    boxDiv.id === (shipTwo.x + '-' + cpuShipTwo.y) ||
                    boxDiv.id === (shipThree.x + '-' + cpuShipThree.y)
                ) {
                      boxDiv.style.backgroundColor = 'red';
                } else {
                        boxDiv.style.backgroundColor = 'white';
                    }

                if (shipTwo.direction == 'horizontal') {
                    if (boxDiv.id === (shipTwo.x + 1) + '-' + shipTwo.y) {
                        boxDiv.style.backgroundColor = 'red';
                        shipTwo.hit();
                        if (shipTwo.holes === 2) {
                            shipTwo.sunk = true;
                        }
                    }
                }
                if (shipTwo.direction == 'vertical') {
                    if (boxDiv.id === shipTwo.x + '-' + (shipTwo.y + 1)) {
                        boxDiv.style.backgroundColor = 'red';
                        shipTwo.hit();
                        if (shipTwo.holes === 2) {
                            shipTwo.sunk = true;
                        }
                    }
                }
                if (shipThree.direction == 'horizontal') {
                    if (boxDiv.id === (shipThree.x + 1) + '-' + shipThree.y) {
                        boxDiv.style.backgroundColor = 'red';
                        shipThree.hit();
                        if (shipThree.holes === 3) {
                            shipThree.sunk = true;
                        }
                    }
                    if (boxDiv.id === (shipThree.x + 2) + '-' + shipThree.y) {
                        boxDiv.style.backgroundColor = 'red';
                        shipThree.hit();
                        if (shipThree.holes === 3) {
                            shipThree.sunk = true;
                        }
                    }
                }
                if (shipThree.direction == 'vertical') {
                    if (boxDiv.id === shipThree.x + '-' + (shipThree.y + 1)) {
                        boxDiv.style.backgroundColor = 'red';
                        shipThree.hit();
                        if (shipThree.holes === 3) {
                            shipThree.sunk = true;
                        };
                    }
                    if (boxDiv.id === shipThree.x + '-' + (shipThree.y + 2)) {
                        boxDiv.style.backgroundColor = 'red';
                        shipThree.hit();
                        if (shipThree.holes === 3) {
                            shipThree.sunk = true;
                        }
                    }
                }

                
                console.log(x, y);
                let playerObject = {
                    x: x,
                    y: y,
                }
                console.log(playerObject);
                })
        }
    }
};

player1Board.createBoard();

cpuBoard.createBoard = function() {
for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
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

                if (
                    boxDiv.id === (cpuShipOne.x + '-' + cpuShipOne.y) ||
                    boxDiv.id === (cpuShipTwo.x + '-' + cpuShipTwo.y) ||
                    boxDiv.id === (cpuShipThree.x + '-' + cpuShipThree.y)
                ) {
                      boxDiv.style.backgroundColor = 'red';
                      if (boxDiv.id === (cpuShipOne.x + '-' + cpuShipOne.y)) {
                        cpuShipOne.hit();
                        if (cpuShipOne.sunk === true) {
                            console.log('The computer has lost ship one.')
                        }
                      }
                      if (boxDiv.id === (cpuShipTwo.x + '-' + cpuShipTwo.y)) {
                        cpuShipTwo.hit();
                        console.log('That is a hit.')
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                      }
                      if (boxDiv.id === (cpuShipThree.x + '-' + cpuShipThree.y)) {
                        cpuShipThree.hit();
                        console.log(cpuShipThree.sunk);
                        console.log('That is a hit.')
                        if (cpuShipThree.sunk === true) {
                            console.log('The computer has lost ship three.')
                        }
                      }
                } else {
                        boxDiv.style.backgroundColor = 'white';
                    }

                if (cpuShipTwo.direction == 'horizontal') {
                    if (boxDiv.id === (cpuShipTwo.x + 1) + '-' + cpuShipTwo.y) {
                        cpuShipTwo.hit();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                    }
                }
                if (cpuShipTwo.direction == 'vertical') {
                    if (boxDiv.id === cpuShipTwo.x + '-' + (cpuShipTwo.y + 1)) {
                        cpuShipTwo.hit();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                    }
                }
                if (cpuShipThree.direction == 'horizontal') {
                    if (boxDiv.id === (cpuShipThree.x + 1) + '-' + cpuShipThree.y) {
                        cpuShipThree.hit();
                        console.log(cpuShipThree.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.sunk === true) {
                            console.log('The computer has lost ship three.')
                        }
                    }
                    if (boxDiv.id === (cpuShipThree.x + 2) + '-' + cpuShipThree.y) {
                        cpuShipThree.hit();
                        console.log(cpuShipThree.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.sunk === true) {
                            console.log('The computer has lost ship three.')
                        }
                    }
                }
                if (cpuShipThree.direction == 'vertical') {
                    if (boxDiv.id === cpuShipThree.x + '-' + (cpuShipThree.y + 1)) {
                        cpuShipThree.hit();
                        console.log(cpuShipThree.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.sunk === true) {
                            console.log('The computer has lost ship three.')
                        }
                    }
                    if (boxDiv.id === cpuShipThree.x + '-' + (cpuShipThree.y + 2)) {
                        cpuShipThree.hit();
                        console.log(cpuShipThree.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.sunk === true) {
                            console.log('The computer has lost ship three.')
                        }
                    }
                }

        
                let computerObject = {
                    x: x,
                    y: y,
                }
                console.log(x, y)
                console.log(computerObject);
                })
            };
        }
    };

    cpuBoard.createBoard();

const turnTracker = document.getElementById('turn-tracker');
const player = new Player('Player One');
const computerElement = new Computer();



class GameTurns {
    playerTurn(event = 'click') {
        turnTracker.innerText = "Your turn.";
    }
    computerTurn() {
        turnTracker.innerText = "Computer's turn.";
        let computerChoice = computerElement.computerTurn();
        const playerBoxes = playerBoard.querySelectorAll('div');
        playerBoxes.forEach(box => {

            //Need to add directional situations for this otherwise it will be buggy.
            if (box.id === (computerChoice.x + '-' + computerChoice.y)) {
                box.style.backgroundColor = 'white';
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[0].x + '-' + playerShips[0].y)) {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                console.log(shipOne.holes);
                if (shipOne.sunk = true) {
                    console.log('Ship One has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[1].x + '-' + playerShips[1].y)) {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Two has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === ((playerShips[1].x + 1) + '-' + playerShips[1].y) && playerShips[1].direction === 'horizontal') {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Two has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[1].x + '-' + (playerShips[1].y + 1) && playerShips[1].direction === 'vertical')) {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Two has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[2].x + '-' + playerShips[2].y)) {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Three has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === ((playerShips[2].x + 1) + '-' + playerShips[2].y) && playerShips[2].direction === 'horizontal') {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Three has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[2].x + '-' + (playerShips[2].y + 1) && playerShips[2].direction === 'vertical')) {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Three has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === ((playerShips[2].x - 1) + '-' + playerShips[2].y) && playerShips[2].direction === 'horizontal') {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Three has sunk.')
                }
            };
            if (box.id === (computerChoice.x + '-' + computerChoice.y) && (computerChoice.x + '-' + computerChoice.y) === (playerShips[2].x + '-' + (playerShips[2].y - 1)) && playerShips[2].direction === 'vertical') {
                box.style.backgroundColor = 'red';
                shipOne.hit();
                if (shipOne.sunk = true) {
                    console.log('Ship Three has sunk.')
                }
            };
           

        });
        console.log(computerChoice);

        }
    addCpuBoardEvent() {
        cpuBoard.addEventListener('click', (event) => {
            this.playerTurn(event);
            turnCycle.cpusTurn();
            console.log(cpuShipOne.holes);
            // You can add more logic here if needed
        });
    }
};

let turn = new GameTurns();

class GameController {
    playersTurn() {
        turn.playerTurn();
        turn.addCpuBoardEvent();
    };
    cpusTurn() {
        turn.computerTurn();
    };
};

console.log(cpuShipOne.holes);

let turnCycle = new GameController();
turnCycle.playersTurn();