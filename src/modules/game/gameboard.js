import { Ship, Square } from "./elements.js";


class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.allShips = [];
    }
    
    createBoard() {
        // -> returns a board of the game in the format:
        //  board[0] = [ square, square, square, square, square, square, square, square, square, square ]
        //  ...
        //  board[9] =  [ square, square, square, square, square, square, square, square, square, square ]
        let board = [];
    
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                let square = new Square();
                row.push(square);
            }
            board.push(row);
        }
        return board;
    }

    placeShip(row, column, shipName, axis) {
        // -> place one ship at given coordinates
        // -> return: 'true' if ship can be placed, else 'false'

        let shipLength = this.#getShipLength(shipName);


        // save positions of ship in array
        let shipPosition = [];
        if (axis == "horizontal") {
            for (let i = column, end = i + shipLength; i < end; i++) {
                shipPosition.push([row, i]);
            }
        } else {
            for (let i = row, end = i + shipLength; i < end; i++) {
                shipPosition.push([i, column]);
            }
        }

        // -- check square: is it on board, has a ship or is neighbor to ship? --
        for (let [row, column] of shipPosition) {

            if (row > 9 || column > 9) return false;

            let square = this.board[row][column];
            if (square.ship || square.neighbor) return false;
        }


        // -- place the ship on the board and set the neighbors --
        let ship = new Ship(shipLength, shipName);

        for (let [row, column] of shipPosition) {
            this.board[row][column].ship = ship;
            this.#setNeighbors(row, column);
        }


        this.allShips.push(ship);

        return true;
    }


    placeShipsRandom() {
        // -> places all the ships randomly on the board
        this.board = this.createBoard();
        this.allShips = [];

        let ships = ["carrier", "battleship", "destroyer", "submarine", "patrol boat"];
        ships.forEach((ship) => {
            while (true) {
                // -- get 1) random row and 2) random column and 3) vertical or horizontal placement
                let row = Math.floor(Math.random() * 10);
                let column = Math.floor(Math.random() * 10);
                let axis = Math.floor(Math.random() * 2) === 0 
                    ? "horizontal" 
                    : "vertical";

                // -- place ship an then, if it can be placed, break out of loop
                let placed = this.placeShip(row, column, ship, axis);
                if (placed) break;
            }
        });
    }


    receiveAttack(row, column) {
        // -> determines whether or not the attack hit a ship or water
        // -> return ["water", false], ["water", true], ["ship", false] or ["ship", true]

        let square = this.board[row][column];

        // if there is no ship on 'square'
        if (!square.ship) {
            if (square.attack) {
                return ["water", false];
            } else {
                square.attack = true;
                return ["water", true];
            }
        }

        // if there is a ship on 'square'
        if (square.ship) {
            if (square.attack) {
                return ["ship", false];
            } else {
                square.ship.hit();
                square.attack = true;
                return ["ship", true];
            }
        }
    }


    allShipsSunk() {
        // -> returns 'true' if all ships were sunk, otherwise 'false'

        let notSunken = this.allShips.filter((ship) => {
            if (ship.isSunk() === false) return ship;
        });

        if (notSunken.length === 0) return true;

        return false;
    }

    
    #getShipLength(name) {
        if (name === "carrier") {
            return 5;
        } else if (name === "battleship") {
            return 4;
        } else if (name === "destroyer") {
            return 3;
        } else if (name === "submarine") {
            return 3;
        } else if (name === "patrol boat") {
            return 2;
        }
    }

    #setNeighbors(row, column) {
        // -> sets Square.neighbor = true
        let arrayNeigbors = [
            // row above
            [row-1, column-1],
            [row-1, column],
            [row-1, column+1],
            // same row
            [row, column-1],
            [row, column+1],
            // row below
            [row+1, column-1],
            [row+1, column],
            [row+1, column+1]
        ]
        
        for (let [row, column] of arrayNeigbors) {
            if (row < 0 || row > 9 || column < 0 || column > 9) {
                continue;
            } else {
                this.board[row][column].neighbor = true;
            }
        }

    }
}


export { Gameboard };
