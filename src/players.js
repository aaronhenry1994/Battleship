const Gameboard = require('../src/gameboard');

class Player {
    constructor(name) {
        this.name = name;
        playerBoard = new Gameboard();
    };
};

class Computer {

    computerTurn(x, y) {
        
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const randomNum = numbers[Math.floor(Math.random() * numbers.length)];

        coordinates = [x, y]

        x = randomNum;
        y = randomNum;

        return coordinates;
    }
};

module.exports = Player;
module.exports = Computer;