"use strict";

function drawCardGrid() {
    const cardGrid = document.querySelector("section.card_grid");
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        cardGrid.append(row);
        for (let j = 0; j < 4; j++) {
            let card = document.createElement("div");
            card.classList.add("card");
            row.append(card);
        }
    }
}

drawCardGrid();

