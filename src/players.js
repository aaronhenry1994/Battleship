import { Gameboard } from '../src/gameboard.js';

class Player {
    constructor(name) {
        this.name = name;
        const playerBoard = new Gameboard;
    };
};

class Computer {

    computerTurn() {
        
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const randomX = numbers[Math.floor(Math.random() * numbers.length)];
        const randomY = numbers[Math.floor(Math.random() * numbers.length)];

        return [randomX, randomY];
    };
};

export { Player, Computer };