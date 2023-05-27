export default class Ship {
    constructor(length) {
        this.length = length
    }

    hit() {
        this.length--;
    }

    isSunk() {
        return this.length === 0
    }
}