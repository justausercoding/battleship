import { Gameboard } from "../modules/game/gameboard.js";


describe("Test: class createBoard -> createBoard()", () => {
    let game = new Gameboard;

    test("board.length", () => {
        expect(game.board.length).toBe(10);
    });

    test("board[0].length", () => {
        expect(game.board[0].length).toBe(10);
    });

    test("board[0][0]", () => {
        expect(game.board[0][0].ship).toBeNull();
    });

    test("board[0][0]", () => {
        expect(game.board[0][0].hit).toBeFalsy();
    });
});


describe("Test: class Gameboard -> rest of the functions", () => {
    let game = new Gameboard();

    test("placeShip() horizontal", () => {
        game.placeShip(0, 3, "battleship", "horizontal");
        expect(game.board[0][3].ship.type).toBe("battleship");
        expect(game.board[0][4].ship.type).toBe("battleship");
        expect(game.board[0][5].ship.type).toBe("battleship");
        expect(game.board[0][6].ship.type).toBe("battleship");
    });

    test("placeShip() vertical", () => {
        game.placeShip(2, 2, "carrier", "vertical");
        expect(game.board[2][2].ship.type).toBe("carrier");
        expect(game.board[3][2].ship.type).toBe("carrier");
        expect(game.board[4][2].ship.type).toBe("carrier");
        expect(game.board[5][2].ship.type).toBe("carrier");
        expect(game.board[6][2].ship.type).toBe("carrier");
    });

    test("receiveAttack()", () => {
        expect(game.receiveAttack(0, 3)).toEqual(["ship", true]);
        expect(game.receiveAttack(0, 3)).toEqual(["ship", false]);
        expect(game.receiveAttack(1, 0)).toEqual(["water", true]);
        expect(game.receiveAttack(1, 0)).toEqual(["water", false]);
        expect(game.receiveAttack(9, 9)).toEqual(["water", true]);
    });

    test("allShipsSunk() - false", () => {
        expect(game.allShipsSunk()).toBeFalsy();
    });

    test("allShipsSunk() - true", () => {
        // horizontal ship
        game.receiveAttack(0, 3);
        game.receiveAttack(0, 4);
        game.receiveAttack(0, 5);
        game.receiveAttack(0, 6);

        // vertical ship
        game.receiveAttack(2, 2);
        game.receiveAttack(3, 2);
        game.receiveAttack(4, 2);
        game.receiveAttack(5, 2);
        game.receiveAttack(6, 2);

        expect(game.allShipsSunk()).toBeTruthy();
    });
});


