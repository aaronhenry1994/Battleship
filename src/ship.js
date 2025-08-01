class Ship {
    constructor(position, long, holes, sunk) {
        this.position = position;
        this.long = long;
        this.holes = holes;
        this.sunk = sunk;
    };

    hit(shot) {

        if (shot == false) {
            return this.holes;
        };
        if (shot == true) {
            return this.holes + 1;
        };
    };

    isSunk(long, holes) {

        if (holes === long) {
            this.long = 0;
            return this.sunk = true;
        };
    };
};

let chronicle = new Ship((1, 2), 2, 0, false);

module.exports = Ship;