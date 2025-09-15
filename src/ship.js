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
    
        if (shot === true) {
            this.holes = this.holes + 1;
        };
        return this.holes;
    };

    isSunk() {

        if (this.holes === this.long) {
            return this.sunk = true;
        } else {
            return false;
        }
    };
};

export { Ship };