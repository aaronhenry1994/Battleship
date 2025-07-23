class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
};

let block = new Node(1, 1);
console.log(block);

class Gameboard {
    
};

let board = new Gameboard;

module.exports = Gameboard;

class Ship {
    constructor(long, holes, sunk) {
        this.long = long;
        this.holes = holes;
        this.sunk = sunk;
    };

    hit(shot) {

        if (shot == false) {
            return this.holes;
        };
        if (shot == true) {
            return this.holes + 1;
        };
    };

    isSunk(long, holes) {

        if (holes === long) {
            this.long = 0;
            return this.sunk = true;
        };
    };
};

let chronicle = new Ship(2, 0, false);

module.exports = Ship;