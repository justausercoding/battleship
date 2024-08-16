class Ship {
    constructor(length, type) {
        this.length = length;
        this.type = type;
        this.hits = 0;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.length === this.hits) return true;
        else return false;
    }
}


class Square {
    constructor() {
        this.ship = null;
        this.attack = false;
        this.neighbor = false;
    }
}


export { Ship, Square };
