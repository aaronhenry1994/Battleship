const Ship = require('../main');

const abernathy = new Ship(2, 0, false)

test ('Makes a ship with a length of 2', () => {
    expect(abernathy.long).toBe(2);
})

test ('Says that it has no holes', () => {
    expect(abernathy.holes).toBe(0);
})

test ('Says the sinking of the ship is false', () => {
    expect(abernathy.sunk).toBe(false);
})

test ('Adds a hit to the ship', () => {
    expect(abernathy.hit(true)).toBe(abernathy.holes = 1);
})

test ('Does not add a hit to the ship', () => {
    expect(abernathy.hit(false)).toBe(abernathy.holes);
})

test ('Sinks the ship', () => {
    expect(abernathy.isSunk(2, 2)).toBe(abernathy.sunk = true);
})