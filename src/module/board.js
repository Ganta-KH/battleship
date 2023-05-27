export default class Gameboard {
    constructor() {
        this.board = this.#createMatrix();
    }

    #createMatrix() {
        const mat = [];
        for (let i = 0; i < 10; i++) {
            mat[i] = new Array(10).fill(0);
        }
        return mat;
    }
}