import { Gameboard } from '../src/gameboard.js';

class Player {
    constructor(name) {
        this.name = name;
    };
};

class Computer {

    computerTurn() {
        
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const x = numbers[Math.floor(Math.random() * numbers.length)];
        const y = numbers[Math.floor(Math.random() * numbers.length)];

        return {x, y};
    };
};

export { Player, Computer };