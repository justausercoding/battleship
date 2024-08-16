import { Ship } from "../modules/game/elements.js";

describe("Test: class Ship - battleship", () => {
    let battleship = new Ship(5, "battleship");

    test("ship length", () => {
        expect(battleship.length).toBe(5);
    });

    test("ship type", () => {
        expect(battleship.type).toEqual("battleship");
    });

    test("ship is not sunken", () => {
        battleship.hit();
        expect(battleship.isSunk()).toBeFalsy();
    });

    test("ship is sunken", () => {
        for (let i = 0; i < 4; i++) battleship.hit();
        expect(battleship.isSunk()).toBeTruthy();
    });
});
