const Ship = require('./main');

const abernathy = new Ship(2)

test ('Makes a ship with a length of 2', () => {
    expect(abernathy.length).toBe(2);
})