const Gameboard = require('../src/gameboard');

let box = new Gameboard;

test ('Creates a 10 by 10 board', () => {
    expect(box.createBoard()).toHaveLength(100);
})

test ('Returns a cordinate', () => {
    expect(box.placeShip(1, 2)).toEqual([{x: 1, y: 2}]);
})