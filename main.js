class Ship {
    constructor(length, hit, sunk) {
        this.length = length;
        this.hit = hit;
        this.sunk = false;
    };
};

let ship1 = new Ship(2, 0, false);

module.exports = Ship;