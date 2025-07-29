class Node {
    constructor0(x, y) {
        this.x = x;
        this.y = y;
    };
}

class Gameboard {
    
    createBoard() {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                let cell = new Node(x, y);
            }
        };
        

        
    };
};

let board = new Gameboard;

module.exports = Gameboard;