class Ship {
    constructor(x, y, long, holes, direction, sunk) {
        this.x = x;
        this.y = y;
        this.long = long;
        this.holes = holes;
        this.direction = direction;
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

export { Ship };