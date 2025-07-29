const Gameboard = require('../src/gameboard');

let box = new Gameboard;

test ('Creates a 10 by 10 board', () => {
    expect(box.createBoard(10, 10)).toBe(10, 10);
})