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

    placeShip() {

    };
};

let block = new Gameboard;
block.createBoard();

module.exports = Gameboard;