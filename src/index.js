import "./style.css";
import { Gameboard } from "./modules/game/gameboard.js";
import { domBoard } from "./modules/dom/domBoard.js";


// ---------- FUNCTIONS ----------
// -- for modal dialog --
function showRandomBoard(player) {
    // player -> instance class Gameboard
    player.placeShipsRandom();

    let divContainer = document.querySelector(".dialog__board-container");
    divContainer.replaceChildren();
    divContainer.appendChild(domBoard(player.board));

    let divBoardSelect = divContainer.lastChild;
    divBoardSelect.classList.add("dialog__board");

    let divMessage = document.querySelector("dialog .message");
    divMessage.textContent = "Select a position for your ships";
}

// -- for modal dialog --
function buildMainWindow(computer) {
    const body = document.querySelector("body");

    // players board: place it on screen
    body.appendChild(domBoard(player.board));
    let divPlayer = body.lastChild;
    divPlayer.classList.add("board-player");

    // computers board: place ships randomly and place board on screen
    computer.placeShipsRandom();
    body.appendChild(domBoard());
    let divComputer = body.lastChild;
    divComputer.classList.add("board-computer");
    divComputer.addEventListener("click", (e) => {
        playerMove(e);
    });

    // players board: deactivate it
    divPlayer.classList.add("not-current-turn");
    
    // computers board: message for player
    let divMessageForPlayer = document.querySelector(".board-computer .message");
    divMessageForPlayer.textContent = "Your move ...";

    // dialog: close
    let dialog = document.querySelector("dialog");
    dialog.close();
    dialog.remove();
}

// -- for main window --
function playerMove(e) {
    // 'squares' with additional classes water-hit, ship-hit, ship have css property 'pointer-events: none';
    if (e.target.classList.contains("square")) {

        let row = e.target.getAttribute("data-row");
        let column = e.target.getAttribute("data-column");

        // return if hit is not accepted because field already was hit
        let [hitObject, hitAccepted] = computer.receiveAttack(row, column);
        if (!hitAccepted) return;

        let divMessageForPlayer = document.querySelector(".board-computer .message");
        let divMessageForComputer = document.querySelector(".board-player .message");
        let divPlayer = document.querySelector(".board-player");
        let divComputer = document.querySelector(".board-computer");

        // messages to be displayed
        if (hitObject === "ship") {
            e.target.classList.add("ship-hit");
            divMessageForPlayer.textContent = "You hit a ship";
        } else if (hitObject === "water") {
            e.target.classList.add("water-hit");
            divMessageForPlayer.textContent = "You hit water";
        }

        // check if game is won
        if (computer.allShipsSunk()) {
            divMessageForPlayer.textContent = "You have won the game";
            return;
        }

        // computer: prepare for move
        setTimeout(() => {
            divPlayer.classList.remove("not-current-turn");
            divComputer.classList.add("not-current-turn");
            divMessageForPlayer.textContent = "";
            divMessageForComputer.textContent = "Computer moves  ...";
        }, 1000);

        // computer: move
        setTimeout(computerMove, 2500);
    }
}

// -- for main window --
function computerMove() {
    let hitObject, hitAccepted, row, column;

    // generate random numbers and attack
    while (true) {
        row = Math.floor(Math.random() * 10);
        column = Math.floor(Math.random() * 10);
        [hitObject, hitAccepted] = player.receiveAttack(row, column);
        if (hitAccepted === true) break;
    }

    let divMessageForPlayer = document.querySelector(".board-computer .message");
    let divMessageForComputer = document.querySelector(".board-player .message");
    let divPlayer = document.querySelector(".board-player");
    let divComputer = document.querySelector(".board-computer");

    // select the attacked square
    let query = `.board-player .square[data-row="${row}"][data-column="${column}"]`;
    let divSquare = document.querySelector(query);

    // messages to be displayed and if necessary add class to square
    if (hitObject === "ship") {
        divSquare.classList.add("ship-hit");
        divMessageForComputer.textContent = "Computer hits a ship";
    } else if (hitObject === "water") {
        divSquare.classList.add("water-hit");
        divMessageForComputer.textContent = "Computer hits water";
    }

    // check if game is won
    if (player.allShipsSunk()) {
        divMessageForComputer.textContent = "Computer has won the game";
        return;
    }

    // player: prepare for move
    setTimeout(() => {
        divPlayer.classList.add("not-current-turn");
        divComputer.classList.remove("not-current-turn");
        divMessageForComputer.textContent = "";
        divMessageForPlayer.textContent = "Your move ...";
    }, 1500);
}



// ---------- PROGRAM ----------
// -- create board database --
let player = new Gameboard();
let computer = new Gameboard();


// -- show modal dialog --
let dialog = document.querySelector("dialog");
showRandomBoard(player);
dialog.showModal();


// -- event listeners for modal dialog --
let buttonRandom = document.querySelector(".dialog__button-random");
buttonRandom.addEventListener("click", () => {
    showRandomBoard(player);
});

let buttonAccept = document.querySelector(".dialog__button-accept");
buttonAccept.addEventListener("click", () => {
    buildMainWindow(computer);

});
