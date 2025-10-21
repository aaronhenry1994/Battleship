import { Gameboard } from '../src/gameboard.js';
import { Ship } from '../src/ship.js';
import { Player } from '../src/players.js';
import { Computer } from '../src/players.js';

const playerBoard = document.getElementById('player-board');
const cpuBoard = document.getElementById('cpu-board');

let player1Board = new Gameboard;

let ships = [];
let cpuShips = [];

let form = document.getElementById('form');

let shipOneX = document.getElementById('shipOne-x');
let shipOneY = document.getElementById('shipOne-y');
let shipOneDirection = document.getElementById('shipOne-direction');

let shipTwoX = document.getElementById('shipTwo-x');
let shipTwoY = document.getElementById('shipTwo-y');
let shipTwoDirection = document.getElementById('shipTwo-direction');

let shipThreeX = document.getElementById('shipThree-x');
let shipThreeY = document.getElementById('shipThree-y');
let shipThreeDirection = document.getElementById('shipThree-direction');

let submitBtn = document.getElementById('submitBtn');

console.log(ships);

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

            /*if (boxDiv.id === (ships[0].x + '-' + ships[0].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                };
                if (boxDiv.id === (ships[1].x + '-' + ships[1].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                };
                if (boxDiv.id === (ships[2].x + '-' + ships[2].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                };

            if (ships[1].direction === 'horizontal') {
                if (boxDiv.id === ((ships[1].x + 1) + '-' + ships[1].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[1].direction === 'vertical') {
                if (boxDiv.id === (ships[1].x + '-' + (ships[1].y + 1))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'horizontal') {
                if (boxDiv.id === ((ships[2].x + 1) + '-' + ships[2].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'horizontal') {
                if (boxDiv.id === ((ships[2].x + 2) + '-' + ships[2].y)) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'vertical') {
                if (boxDiv.id === (ships[2].x + '-' + (ships[2].y + 1))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }
            if (ships[2].direction === 'vertical') {
                if (boxDiv.id === (ships[2].x + '-' + (ships[2].y + 2))) {
                    boxDiv.style.backgroundColor = 'grey';
                }
            }

            if (
                    ships[0].holes === 1 &&
                    ships[1].holes === 2 &&
                    ships[2].holes === 3
                ) {
                    console.log('You have lost.')
                    turnTracker.innerText = 'You have lost.'
                }*/

                boxDiv.addEventListener('click', () => {
                console.log(boxDiv.id);
                e.preventDefault();

                
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

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let shipOne = new Ship(shipOneX.value, shipOneY.value, 1, 0, null, false);
    let shipTwo = new Ship(shipTwoX.value, shipTwoY.value, 2, 0, shipTwoDirection.value, false);
    let shipThree = new Ship(shipThreeX.value, shipThreeY.value, 3, 0, shipThreeDirection.value, false);

    ships.push(shipOne);
    ships.push(shipTwo);
    ships.push(shipThree);

    function colorPlayerShips() {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let cell = document.getElementById(x + '-' + y);
            if (!cell) continue;
            cell.style.backgroundColor = 'lightblue'; // reset

            // Loop through all ships
            ships.forEach(ship => {
                // Always color the starting cell
                if (cell.id === (Number(ship.x) + '-' + Number(ship.y))) {
                    cell.style.backgroundColor = 'grey';
                }
                // Color the rest of the ship based on direction and length
                if (ship.direction === 'horizontal') {
                    for (let i = 1; i < ship.long; i++) {
                        if (cell.id === (Number(ship.x) + i) + '-' + Number(ship.y)) {
                            cell.style.backgroundColor = 'grey';
                        }
                    }
                }
                if (ship.direction === 'vertical') {
                    for (let i = 1; i < ship.long; i++) {
                        if (cell.id === Number(ship.x) + '-' + (Number(ship.y) + i)) {
                            cell.style.backgroundColor = 'grey';
                        }
                    }
                }
            });
        }
    }
}

    console.log(shipOne);
    console.log(shipTwo);
    console.log(shipThree);
    console.log(ships);
    colorPlayerShips();

})

function placeCPUShips() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let direction = ['horizontal', 'vertical']

        const cpuShipOneX = numbers[Math.floor(Math.random() * numbers.length)];
        const cpuShipOneY = numbers[Math.floor(Math.random() * numbers.length)];

        const cpuShipTwoX = numbers[Math.floor(Math.random() * numbers.length)];
        const cpuShipTwoY = numbers[Math.floor(Math.random() * numbers.length)];
        let cpuShipTwoDirection = direction[Math.floor(Math.random() * direction.length)];

        const cpuShipThreeX = numbers[Math.floor(Math.random() * numbers.length)];
        const cpuShipThreeY = numbers[Math.floor(Math.random() * numbers.length)];
        let cpuShipThreeDirection = direction[Math.floor(Math.random() * direction.length)];

        let cpuShipOne = new Ship (cpuShipOneX, cpuShipOneY, 1, 0, null, false);
        let cpuShipTwo = new Ship (cpuShipTwoX, cpuShipTwoY, 2, 0, cpuShipTwoDirection, false);
        let cpuShipThree = new Ship (cpuShipThreeX, cpuShipTwoY, 3, 0, cpuShipThreeDirection, false);

        cpuShips.push(cpuShipOne, cpuShipTwo, cpuShipThree);

        return {cpuShipOne, cpuShipTwo, cpuShipThree};
};

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
                        cpuShips[0].hit(true)
                        console.log(cpuShips[0].holes);
                        console.log(cpuShips[0].isSunk());
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[0].sunk === true) {
                            cpuShips[0].isSunk();
                            console.log('The computer has lost ship one.')
                        };
                    }
                    if (boxDiv.id === (cpuShips[1].x + '-' + cpuShips[1].y)) {
                        cpuShips[1].hit(true)
                        console.log(cpuShips[1].holes);
                        console.log(cpuShips[1].isSunk());
                        if (cpuShips[1].sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                        cpuShips[1].isSunk();
                        boxDiv.style.backgroundColor = 'red';
                    }
                    if (boxDiv.id === (cpuShips[2].x + '-' + cpuShips[2].y)) {
                        cpuShips[2].hit(true)
                        console.log(cpuShips[2].holes);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[2].sunk === true) {
                            cpuShips[2].isSunk();
                            console.log('The computer has lost ship three')
                        }
                    }
                }

                if (cpuShips[1].direction === 'horizontal')
                    if (boxDiv.id === (cpuShips[1].x +1) + '-' + cpuShips[1].y)
                    {
                        cpuShips[1].hit(true)
                        console.log(cpuShips[1].sunk);
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[1].sunk === true) {
                            console.log('The computer has lost ship two.')
                        };
                    }
                if (cpuShips[1].direction === 'vertical')
                    if (boxDiv.id === cpuShips[1].x + '-' + (cpuShips[1].y + 1))
                    {
                        cpuShips[1].hit(true)
                        console.log(cpuShips[1].sunk);
                        cpuShips[1].isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[1].sunk === true) {
                            console.log('The computer has lost ship two.')
                        }
                    }
                if (cpuShips[2].direction === 'horizontal')
                    if (
                        boxDiv.id === (cpuShips[2].x + 1) + '-' + cpuShips[2].y ||
                        boxDiv.id === (cpuShips[2].x + 2) + '-' + cpuShips[2].y
                    )
                    {
                        cpuShips[2].hit(true);
                        console.log(cpuShips[2].holes);
                        cpuShips[2].isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[2].holes === 3) {
                            console.log(cpuShips[2].sunk);
                            console.log('The computer has lost ship three.')
                        };
                    };
                if (cpuShips[2].direction === 'vertical')
                    if (
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 1)) ||
                        boxDiv.id === (cpuShips[2].x + '-' + (cpuShips[2].y + 2))
                    )
                    {
                        cpuShips[2].hit(true);
                        console.log(cpuShips[2].sunk);
                        shipThree.isSunk();
                        boxDiv.style.backgroundColor = 'red';
                        if (cpuShips[2].holes === 3) {
                            console.log('The computer has lost ship three.')
                        }
                    };
                if (
                    cpuShips[0].holes === 1 &&
                    cpuShips[1].holes === 2 &&
                    cpuShips[2].holes === 3
                ) {
                    console.log('The computer has lost.')
                    turnTracker.innerText = 'The computer has lost.'
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

turnTracker.innerText = 'Place your ships';

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
                        ships[0].hit(true);
                        ships[0].isSunk();
                        console.log('Ship one has been lost.');
                    }
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[1].x + '-' + ships[1].y)) {
                        ships[1].hit(true);
                        ships[1].isSunk();
                        console.log('That is a hit on ship two.');
                        if (ships[1].isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    }
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + '-' + ships[2].y)) {
                        ships[1].hit(true);
                        ships[1].isSunk();
                        console.log('That is a hit on ship three.');
                        if (ships[1].isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    }
                }
                if (ships[1].direction === 'horizontal') {
                    if ((computerChoice.x + '-' + computerChoice.y) === ((ships[1].x + 1)) + '-' + ships[1].y) {
                        ships[1].hit(true);
                        ships[1].isSunk();
                        console.log(ships[1].isSunk());
                        console.log('That is a hit on ship two.')
                        box.style.backgroundColor = 'red';
                        if (ships[1].isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    }
                };
                if (ships[1].direction === 'vertical') {
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[1].x + '-' + (ships[1].y + 1))) {
                        ships[1].hit(true);
                        ships[1].isSunk();
                        console.log(ships[1].isSunk());
                        console.log('That is a hit on ship two.')
                        box.style.backgroundColor = 'red';
                        if (ships[1].isSunk() === true) {
                            console.log('Ship two has been lost.')
                        };
                    };
                };
                if (ships[2].direction === 'horizontal') {
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + 1) + '-' + ships[2].y)  {
                        ships[2].hit(true);
                        ships[2].isSunk();
                        console.log(ships[2].isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (ships[2].isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    };
                    if ((computerChoice.x + '-' + computerChoice.y) === (ships[2].x + 2) + '-' + ships[2].y) {
                        ships[2].hit(true);
                        ships[2].isSunk();
                        console.log(ships[2].isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (ships[2].isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    }
                };
                if (ships[2].direction === 'vertical') {
                    if ((computerChoice.x + '-' + computerChoice.y) === ships[2].x + '-' + (ships[2].y + 1)) {
                        ships[2].hit(true);
                        ships[2].isSunk();
                        console.log(ships[2].isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (ships[2].isSunk() === true) {
                            console.log('Ship three has been lost.')
                        };
                    };
                    if ((computerChoice.x + '-' + computerChoice.y) === ships[2].x + '-' + (ships[2].y + 2)) {
                        ships[2].hit(true);
                        ships[2].isSunk();
                        console.log(ships[2].isSunk());
                        console.log('That is a hit on ship three.')
                        box.style.backgroundColor = 'red';
                        if (ships[2].isSunk() === true) {
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
            console.log(cpuShips[0].holes);
            console.log(cpuShips[1].holes);
            console.log(cpuShips[2].holes)
        });
    }
};

let turn = new GameTurns();

class GameController {
    playersTurn() {
        turn.playerTurn();
        cpuBoard.addEventListener('click', function() {
            turn.computerTurn();
        });
    };
    cpusTurn() {
        turn.computerTurn();
        playerBoard.addEventListener('click', function() {
            turn.playerTurn();
        });
    };
};

let turnCycle = new GameController();

form.addEventListener('submit', function() {
    turnCycle.playersTurn();
    placeCPUShips();
    console.log(cpuShips);
});