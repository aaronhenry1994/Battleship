const Gameboard = require('../src/gameboard');
const Ship = require('../src/ship');

let box = new Gameboard;
let sunk = [1, 2, 3]
let one = [1]
let two = [1, 2]

test ('Creates a 10 by 10 board', () => {
    expect(box.createBoard()).toHaveLength(100);
})

test ('Returns a ship with a length of a two horizontally', () => {
    expect(box.placeShip(1, 2, 2, 'horizontal')).toEqual({"holes": 0, "long": 1, "position": [{"x": 1, "y": 2}], "sunk": false} );
});

test ('Compares ship coordinates and hits', () => {
    expect(box.receiveAttack(1, 2)).toEqual([[{ x: 1, y: 2 }]]);
});

test ('Shows all ships have been sunk.', () => {
    expect(box.detectSinkage(sunk)).toBe("All ships have been sunk.")
});

test ('Shows all ships have been sunk.', () => {
    expect(box.detectSinkage(one)).toBe("There are still two ships remaining.")
});

test ('Shows all ships have been sunk.', () => {
    expect(box.detectSinkage(two)).toBe("There is still one ship remaining.")
});