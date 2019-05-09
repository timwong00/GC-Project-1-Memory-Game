"use strict";

<<<<<<< HEAD
var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}

$('#js-startTimer').click(function () {
    $('.js-timeout').text("2:00");
    countdown();
});

$('#js-resetTimer').click(function () {
    $('.js-timeout').text("2:00");
    clearInterval(interval);
});
=======
// function drawCardGrid() {
//     const cardGrid = document.querySelector("section.card_grid");
//     for (let i = 0; i < 5; i++) {
//         let row = document.createElement("div");
//         row.classList.add("row");
//         cardGrid.append(row);
//         for (let j = 0; j < 4; j++) {
//             let card = document.createElement("div");
//             card.classList.add("card");
//             row.append(card);
//         }
//     }
// }

// drawCardGrid();

window.onload = drawCardGrid();

function drawCardGrid() {
    const cardGrid = document.querySelector("section.card_grid");
    if (window.innerWidth > 768) {
        for (let i = 0; i < 4; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            cardGrid.append(row);
            for (let j = 0; j < 5; j++) {
                let card = document.createElement("div");
                card.classList.add("card");
                row.append(card);
            }
        }
    } else {
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
}
>>>>>>> styleHTML
