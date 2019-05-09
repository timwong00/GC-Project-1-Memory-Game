"use strict";

const main = document.querySelector("main");

main.addEventListener("click", function(event) {
    if(event.target.classList.contains("start_btn")) {
        startGame();
    } else if (event.target.classList.contains("reset_btn")) {
        resetGame();
    }
});

function startGame() {

}