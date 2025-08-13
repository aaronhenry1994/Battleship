class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
}

class Gameboard {

    board = [];

    arr = [];
    ships = [];
    
    createBoard() {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                let cell = new Node(x, y);
                this.board.push(cell);
            };
        };
        return this.board
    };

    placeShip(x, y, length, direction) {
        position = {
            x: x,
            y: y,
        };

        coordinates = [];

        coordinates.push(position);
        this.arr.push(position);

        if (length = 1) {
            this.ships.push(coordinates);
            return boat = new Ship(coordinates, 1, 0, false);
        }
        if (length = 2 && direction === 'horizontal') {
            coordinates.push(([x+1, y]))
            this.ships.push(coordinates);
            return boat = new Ship(coordinates, 2, 0, false, 'horizontal');
        };
        if (length = 3 && direction === 'horizontal') {
            this.ships.push(coordinates);
            coordinates.push(([x+2, y]));
            return boat = new Ship(coordinates, 3, 0, false, 'horizontal');
        };
        if (length = 2 && direction === 'vertical') {
            this.ships.push(coordinates);
            coordinates.push(([x, y + 1]))
            return boat = new Ship(coordinates, 2, 0, false, 'vertical');
        };
        if (length = 3 && direction === 'vertical') {
            this.ships.push(coordinates);
            coordinates.push(([x, y + 2]));
            return boat = new Ship(coordinates, 3, 0, false, 'vertical');
        };
    };

    receiveAttack(x, y) {

        position = {
            x: x,
            y: y,
        };
    
        let shots = [];
        shots.push(position);
        
        let misses = [];
        let hits = [];
        if (this.arr.includes(shots)) {
            hits.push(shots);
            boat.hits = 1;
            return hits;
        }
        else {
            misses.push(shots);
            return misses;
        };
    };

    detectSinkage(array) {
        if (array.length === 1) {
            return "There are still two ships remaining."
        }
        if (array.length === 2) {
            return "There is still one ship remaining."
        }
        if (array.length === 3) {
            return "All ships have been sunk."
        };
    };

};

export { Gameboard };