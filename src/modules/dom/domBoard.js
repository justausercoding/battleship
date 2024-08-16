function domBoard(board = false) {
    /*
    divParent
    |__ divMessageContainer (class: message-container)
        |__ divMessage (class: message)
    |__ divRow (class: row)
        |__ divSquare (class: square / data-row: row / data-column: column)
    */

    // -- create parent element --
    const divParent = document.createElement("div");

    // -- create title --
    const divMessageContainer = document.createElement("div");
    divMessageContainer.classList.add("message-container");

    const divMessage = document.createElement("div");
    divMessage.classList.add("message");

    divMessageContainer.appendChild(divMessage);
    divParent.appendChild(divMessageContainer);

    // -- create the rows and inside them the squares --
    for (let i = 0; i < 10; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");

        for (let j = 0; j < 10; j++) {
            const divSquare = document.createElement("div");
            divSquare.setAttribute("data-row", i);
            divSquare.setAttribute("data-column", j);

            divSquare.classList.add("square");
            if (board) {
                if (board[i][j].ship) {
                    divSquare.classList.add("ship");
                }
            }

            divRow.appendChild(divSquare);
        }

        divParent.appendChild(divRow);
    }

    return divParent;
}

export { domBoard };
