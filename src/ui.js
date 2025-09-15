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
                    boxDiv.id === (shipOne.x + '-' + shipOne.y) ||
                    boxDiv.id === (shipTwo.x + '-' + shipTwo.y) ||
                    boxDiv.id === (shipThree.x + '-' + shipThree.y)
                ) {
                    shipOne.hit();
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
                    boxDiv.id === (cpuShips[0].x + '-' + cpuShips[0].y) ||
                    boxDiv.id === (cpuShips[1].x + '-' + cpuShips[1].y) ||
                    boxDiv.id === (cpuShips[2].x + '-' + cpuShips[2].y)
                ) {
                    if (boxDiv.id === (cpuShips[0].x + '-' + cpuShips[0].y)) {
                        shipOne.hit(true)
                        console.log(shipOne.holes);
                        console.log(shipOne.isSunk());
                        boxDiv.style.backgroundColor = 'red';
                        if (shipOne.sunk === true) {
                            shipOne.isSunk();
                            console.log('The computer has lost ship one.')
                        };
                    }
                    if (boxDiv.id === (cpuShips[1].x + '-' + cpuShips[1].y)) {
                        shipTwo.hit(true)
                        console.log(shipTwo.holes);
                        console.log(shipTwo.isSunk());
                        if (shipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                        shipTwo.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                    }
                    if (boxDiv.id === (cpuShips[2].x + '-' + cpuShips[2].y)) {
                        shipThree.hit(true)
                        console.log(shipThree.holes);
                        boxDiv.style.backgroundColor = 'red';
                        if (shipThree.sunk === true) {
                            shipThree.isSunk();
                            console.log('The computer has lost ship three')
                        }
                    }
                }

                if (cpuShips[1].direction === 'horizontal')
                    if (boxDiv.id === (cpuShips[1].x +1) + '-' + cpuShips[1].y)
                    {
                        shipTwo.hit(true)
                        console.log(shipTwo.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (shipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        };
                    }
                if (cpuShips[1].direction === 'vertical')
                    if (boxDiv.id === cpuShips[1].x + '-' + (cpuShips[1].y + 1))
                    {
                        shipTwo.hit(true)
                        console.log(shipTwo.sunk);
                        shipTwo.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (shipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                    }
                if (cpuShips[2].direction === 'horizontal')
                    if (
                        boxDiv.id === (cpuShips[2].x + 1) + '-' + cpuShips[2].y ||
                        boxDiv.id === (cpuShips[2].x + 2) + '-' + cpuShips[2].y
                    )
                    {
                        shipThree.hit(true);
                        console.log(shipThree.holes);
                        shipThree.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            console.log(shipThree.sunk);
                            console.log('The computer has lost ship three.')
                        };
                    };
                if (cpuShips[2].direction === 'vertical')
                    if (
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 1)) ||
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 2))
                    )
                    {
                        shipThree.hit(true);
                        console.log(shipThree.sunk);
                        shipThree.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            console.log('The computer has lost ship three.')
                        }
                    };

        
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
            console.log(cpuShipTwo.holes);
            console.log(cpuShipThree.holes)
            
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

let turnCycle = new GameController();
turnCycle.playersTurn();