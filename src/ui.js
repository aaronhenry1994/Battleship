import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';
import { Player } from '../src/players.js';
import { Computer } from '../src/players.js';

const playerBoard = document.getElementById('player-board');
const cpuBoard = document.getElementById('cpu-board');

let player1Board = new Gameboard;
player1Board.placeShip(3, 4, 2, 'vertical');

let ships = [];
let cpuShips = [];

let shipOne = new Ship(1, 2, 1, 0, null, false);
ships.push(shipOne);

let shipTwo = new Ship (4, 5, 2, 0, 'vertical', false);
ships.push(shipTwo);

let shipThree = new Ship (4, 8, 2, 0, 'horizontal', false);
ships.push(shipThree);

console.log(ships);

let cpuShipOne = new Ship(1, 2, 1, 0, 'horizontal', false);
cpuShips.push(cpuShipOne);

let cpuShipTwo = new Ship (4, 5, 2, 0, 'vertical', false);
cpuShips.push(cpuShipTwo);

let cpuShipThree = new Ship (4, 8, 2, 0, 'horizontal', false);
cpuShips.push(cpuShipThree);

console.log(cpuShips);

console.log(ships[0].direction);
console.log(ships[1].direction);
console.log(ships[2].direction);

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
                    boxDiv.style.backgroundColor = 'grey';
                };
                if (boxDiv.id === (shipTwo.x + '-' + shipTwo.y)) {
                    boxDiv.style.backgroundColor = 'grey';
                };
                if (boxDiv.id === (shipThree.x + '-' + shipThree.y)) {
                    boxDiv.style.backgroundColor = 'grey';
                };

            if (ships[1].direction === 'horizontal') {
                if (boxDiv.id === ((shipTwo.x + 1) + '-' + shipTwo.y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[1].direction === 'vertical') {
                if (boxDiv.id === (shipTwo.x + '-' + (shipTwo.y + 1))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'horizontal') {
                if (boxDiv.id === ((shipThree.x + 1) + '-' + shipThree.y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'horizontal') {
                if (boxDiv.id === ((shipThree.x + 2) + '-' + shipThree.y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'vertical') {
                if (boxDiv.id === (shipThree.x + '-' + (shipThree.y + 1))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'vertical') {
                if (boxDiv.id === (shipThree.x + '-' + (shipThree.y + 2))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }

                boxDiv.addEventListener('click', () => {
                console.log(boxDiv.id);
                e.preventDefault();
                
                /*if (
                    box.id === (ships[0].x + '-' + ships[0].y) ||
                    box.id === (ships[1].x + '-' + ships[1].y) ||
                    box.id === (ships[2].x + '-' + ships[2].y)
                ) {
                    if (box.id === (ships[0].x + '-' + ships[0].y)) {
                        shipOne.hit(true)
                        console.log(shipOne.holes);
                        console.log(shipOne.isSunk());
                        box.style.backgroundColor = 'red';
                        if (shipOne.holes === 1) {
                            shipOne.isSunk();
                            console.log('Ship one has been lost.')
                        };
                    };
                    if (box.id === (ships[1].x + '-' + ships[1].y)) {
                        shipTwo.hit(true)
                        console.log(shipTwo.holes);
                        console.log(shipTwo.isSunk());
                        if (shipTwo.holes === 2) {
                            console.log('Ship two has been lost.')
                        }
                        shipTwo.isSunk();
                        box.style.backgroundColor = 'red';
                    };
                    if (box.id === (ships[2].x + '-' + ships[2].y)) {
                        shipThree.hit(true)
                        console.log(shipThree.holes);
                        box.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            shipThree.isSunk();
                            console.log('Ship three has been lost.')
                        }
                    }
                }
                if (ships[1].direction === 'horizontal') {
                    if (box.id === (ships[1].x + 1) + '-' + ships[1].y) {
                        shipTwo.hit(true);
                        console.log(shipTwo.holes);
                        box.style.backgroundColor = 'red';
                        if (shipTwo.holes === 2) {
                            shipTwo.isSunk();
                            console.log('Ship two has been lost.')
                        };
                    };
                }
                if (ships[1].direction === 'vertical') {
                    if (box.id === ships[1].x + '-' + (ships[1].y + 1)) {
                        shipTwo.hit(true);
                        console.log(shipTwo.holes);
                        box.style.backgroundColor = 'red';
                        if (shipTwo.holes === 2) {
                            shipTwo.isSunk();
                            console.log('Ship two has been lost.')
                        };
                    };
                };
                if (ships[2].direction === 'horizontal') {
                    if (box.id === (ships[2].x + 1) + '-' + ships[2].y) {
                        shipThree.hit(true);
                        console.log(shipThree.holes);
                        box.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            shipThree.isSunk();
                            console.log('Ship three has been lost.')
                        }
                    }
                }
                if (ships[2].direction === 'horizontal') {
                    if (box.id === (ships[2].x + 2) + '-' + ships[2].y) {
                        shipThree.hit(true);
                        console.log(shipThree.holes);
                        box.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            shipThree.isSunk();
                            console.log('Ship three has been lost.')
                        }
                    }
                }
                if (ships[2].direction === 'vertical') {
                    if (box.id === ships[2].x + '-' + (ships[2].y + 1)) {
                        shipThree.hit(true);
                        console.log(shipThree.holes);
                        box.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            shipThree.isSunk();
                            console.log('Ship three has been lost.')
                        }
                    }
                }
                if (ships[2].direction === 'vertical') {
                    if (box.id === ships[2].x + '-' + (ships[2].y + 2)) {
                        shipThree.hit(true);
                        console.log(shipThree.holes);
                        box.style.backgroundColor = 'red';
                        if (shipThree.holes === 3) {
                            shipThree.isSunk();
                            console.log('Ship three has been lost.')
                        }
                    }
                }*/

                
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
                boxDiv.id = x + '-' + y;
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
                    boxDiv.id != (cpuShips[0].x + '-' + cpuShips[0].y) &&
                    boxDiv.id != (cpuShips[1].x + '-' + cpuShips[1].y) &&
                    boxDiv.id != (cpuShips[2].x + '-' + cpuShips[2].y)
                ) {
                    boxDiv.style.backgroundColor = 'white';
                };

                if (
                    boxDiv.id === (cpuShips[0].x + '-' + cpuShips[0].y) ||
                    boxDiv.id === (cpuShips[1].x + '-' + cpuShips[1].y) ||
                    boxDiv.id === (cpuShips[2].x + '-' + cpuShips[2].y)
                ) {
                    if (boxDiv.id === (cpuShips[0].x + '-' + cpuShips[0].y)) {
                        cpuShipOne.hit(true)
                        console.log(cpuShipOne.holes);
                        console.log(cpuShipOne.isSunk());
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipOne.sunk === true) {
                            cpuShipOne.isSunk();
                            console.log('The computer has lost ship one.')
                        };
                    }
                    if (boxDiv.id === (cpuShips[1].x + '-' + cpuShips[1].y)) {
                        cpuShipTwo.hit(true)
                        console.log(cpuShipTwo.holes);
                        console.log(cpuShipTwo.isSunk());
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                        cpuShipTwo.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                    }
                    if (boxDiv.id === (cpuShips[2].x + '-' + cpuShips[2].y)) {
                        cpuShipThree.hit(true)
                        console.log(cpuShipThree.holes);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.sunk === true) {
                            cpuShipThree.isSunk();
                            console.log('The computer has lost ship three')
                        }
                    }
                }

                if (cpuShips[1].direction === 'horizontal')
                    if (boxDiv.id === (cpuShips[1].x +1) + '-' + cpuShips[1].y)
                    {
                        cpuShipTwo.hit(true)
                        console.log(cpuShipTwo.sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        };
                    }
                if (cpuShips[1].direction === 'vertical')
                    if (boxDiv.id === cpuShips[1].x + '-' + (cpuShips[1].y + 1))
                    {
                        cpuShipTwo.hit(true)
                        console.log(cpuShipTwo.sunk);
                        cpuShipTwo.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipTwo.sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                    }
                if (cpuShips[2].direction === 'horizontal')
                    if (
                        boxDiv.id === (cpuShips[2].x + 1) + '-' + cpuShips[2].y ||
                        boxDiv.id === (cpuShips[2].x + 2) + '-' + cpuShips[2].y
                    )
                    {
                        cpuShipThree.hit(true);
                        console.log(cpuShipThree.holes);
                        shipThree.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.holes === 3) {
                            console.log(cpuShipThree.sunk);
                            console.log('The computer has lost ship three.')
                        };
                    };
                if (cpuShips[2].direction === 'vertical')
                    if (
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 1)) ||
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 2))
                    )
                    {
                        cpuShipThree.hit(true);
                        console.log(cpuShipThree.sunk);
                        shipThree.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShipThree.holes === 3) {
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
            if (box.id === (computerChoice.x + '-' + computerChoice.y)) {
                box.style.backgroundColor = 'white';
                if (
                    ((computerChoice.x + '-' + computerChoice.y) === (ships[0].x + '-' + ships[0].y)) ||
                    ((computerChoice.x + '-' + computerChoice.y) === (ships[1].x + '-' + ships[1].y)) ||
                    ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + '-' + ships[2].y))
                ) {
                    box.style.backgroundColor = 'red';
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[0].x + '-' + ships[0].y)) {
                        shipOne.hit(true);
                        shipOne.isSunk();
                        console.log('Ship one has been lost.');
                    }
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[1].x + '-' + ships[1].y)) {
                        shipTwo.hit(true);
                        shipTwo.isSunk();
                        console.log('That is a hit on ship two.');
                        if (shipTwo.isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    }
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + '-' + ships[2].y)) {
                        shipThree.hit(true);
                        shipThree.isSunk();
                        console.log('That is a hit on ship three.');
                        if (shipTwo.isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    }
                }
                if (ships[1].direction === 'horizontal') {
                    if ((computerChoice.x + '-' + computerChoice.y) === ((ships[1].x + 1)) + '-' + ships[1].y) {
                        ships[1].hit(true);
                        shipTwo.isSunk();
                        console.log(shipTwo.isSunk());
                        console.log('That is a hit on ship two.')
                        box.style.backgroundColor = 'red';
                        if (shipTwo.isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    }
                };
                if (ships[1].direction === 'vertical') {
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[1].x + '-' + (ships[1].y + 1))) {
                        ships[1].hit(true);
                        shipTwo.isSunk();
                        console.log(shipTwo.isSunk());
                        console.log('That is a hit on ship two.')
                        box.style.backgroundColor = 'red';
                        if (shipTwo.isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    };
                };
                if (ships[2].direction === 'horizontal') {
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + 1) + '-' + ships[2].y)  {
                        ships[2].hit(true);
                        shipThree.isSunk();
                        console.log(shipThree.isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (shipThree.isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    };
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + 2) + '-' + ships[2].y) {
                        ships[2].hit(true);
                        shipThree.isSunk();
                        console.log(shipThree.isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (shipThree.isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    }
                };
                if (ships[2].direction === 'vertical') {
                    if ((computerChoice.x + '-' + computerChoice.y) === ships[2].x + '-' + (ships[2].y + 1)) {
                        ships[2].hit(true);
                        shipThree.isSunk();
                        console.log(shipThree.isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (shipThree.isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    };
                    if ((computerChoice.x + '-' + computerChoice.y) === ships[2].x + '-' + (ships[2].y + 2)) {
                        ships[2].hit(true);
                        shipThree.isSunk();
                        console.log(shipThree.isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (shipThree.isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    };
                };
                };
            
                
        })
    };
    
    addCpuBoardEvent() {
        cpuBoard.addEventListener('click', (event) => {
            this.playerTurn(event);
            turnCycle.cpusTurn();
            console.log(cpuShipOne.holes);
            console.log(cpuShipTwo.holes);
            console.log(cpuShipThree.holes)
        });
    }
};

let turn = new GameTurns();

class GameController {
    playersTurn() {
        turn.playerTurn();
        turn.addCpuBoardEvent();
        turn.playerTurn();
    };
    cpusTurn() {
        turn.computerTurn();
        turn.playerTurn();
    };
};

let turnCycle = new GameController();
turnCycle.playersTurn();