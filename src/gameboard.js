const Ship = require('../src/ship');

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
}

class Gameboard {

    board = [];
    
    createBoard() {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                let cell = new Node(x, y);
                this.board.push(cell);
            };
        };
        return this.board
    };

    placeShip(x, y, length, horizontal, vertical) {
        let coordinates = [];
        position = {
            x: x,
            y: y,
        };

        coordinates.push(position);



        if (length = 1) {
            return boat = new Ship(coordinates, 1, 0, false);
        }
        if (length = 2 && horizontal === true) {
            coordinates.push((x+1, y))
            return boat = new Ship(coordinates, 2, 0, false, horizontal);
        };
        if (length = 3 && horizontal === true) {
            coordinates.push((x+2, y));
            return boat = new Ship(coordinates, 3, 0, false, horizontal);
        };
        if (length = 2 && vertical === true) {
            coordinates.push((x, y + 1))
            return boat = new Ship(coordinates, 2, 0, false, vertical);
        };
        if (length = 3 && vertical === true) {
            coordinates.push((x, y + 2));
            return boat = new Ship(coordinates, 3, 0, false, vertical);
        };
    };
};

let block = new Gameboard;
block.createBoard();

module.exports = Gameboard;