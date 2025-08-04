const Gameboard = require('../src/gameboard');

let box = new Gameboard;

test ('Creates a 10 by 10 board', () => {
    expect(box.createBoard()).toHaveLength(100);
})

test ('Returns a ship with a length of a two horizontally', () => {
    expect(box.placeShip(1, 2, 2, true, false)).toEqual({"holes": 0, "long": 1, "position": [{"x": 1, "y": 2}], "sunk": false} );
});