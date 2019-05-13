"use strict";
let audio = new Audio("Game of Thrones.mp3");
let hodor = new Audio("hodor.mp3");
let gridCreated = 0;

const main = document.querySelector("main");

main.addEventListener("click", function (event) {
    if (event.target.classList.contains("start_btn")) {
        startGame();
    } else if (event.target.classList.contains("reset_btn")) {
        resetGame();
    }
});

// variable declarations for timers and audio
//array containing all the card data and images
const cardArray = [
    {
        name: "Stark",
        img: "images/1.png"
    },
    {
        name: "Lannister",
        img: "images/2.png"
    },
    {
        name: "Baratheon",
        img: "images/3.png"
    },
    {
        name: "Targaryen",
        img: "images/4.png"
    },
    {
        name: "Martell",
        img: "images/5.png"
    },
    {
        name: "Tyrell",
        img: "images/6.png"
    },
    {
        name: "Greyjoy",
        img: "images/7.png"
    },
    {
        name: "Tully",
        img: "images/8.png"
    },
    {
        name: "Arryn",
        img: "images/9.png"
    },
    {
        name: "Hodor",
        img: "images/10.png"
    }
];


let gameGrid = [...cardArray, ...cardArray]; //uses spread operator to double the cardarray into new array called gamegrid
gameGrid.sort(() => 0.5 - Math.random());   //randomizs the gamegrid array using mathrandom

const grid = document.getElementById("game");  //accesses the section in HTML with ID game

// wrapped the create grid code into the createGrid function
function createGrid() {
    gameGrid.forEach(item => {                       //for each image in our array
        const card = document.createElement("div");  //we create a div with a class card
        card.classList.add("card");
        card.dataset.name = item.name;
        const front = document.createElement("div"); //another div for the front of the card with class front
        front.classList.add("front");
        front.style.backgroundImage = `url(./images/cardback.jpg)`;
        const back = document.createElement("div");  //and another div with the class back
        back.classList.add("back");
        back.style.backgroundImage = `url(${item.img})`;  //sets the image for the back of the card
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
    gridCreated++;
}

// added a remove grid function
function removeGrid() {
    grid.innerHTML = `<p class="instructions top_left"><i class="material-icons">
    arrow_upward
    </i>Start Game</p>
    <p class="instructions top_right">Reset Game<i class="material-icons">
    arrow_upward
    </i></p>
    <img class="cover" src="https://data.whicdn.com/images/241579758/original.gif" alt="">
    `;
    gridCreated = 0;
}

let userPicks = 0;  //declares a variable to try user choices, sets it at 0
let card1 = null;
let card2 = null;
let delay = 1200;  //delay before flipping cards or removing
let endGame = document.getElementsByClassName("matched"); //array to keep track of matches for endGame function
let winImage = document.getElementById("bran_popup");

grid.addEventListener("click", function (event) {
    let clicked = event.target;
    if (clicked.parentNode.classList.contains("choice") || clicked === clicked.parentNode.classList.contains("clickedOn") || clicked === clicked.nextSibling.classList.contains("matched")) {  //add class for choice with click, this line makes it so if they click the same card it doesn't count as a choice
        return;
    }
    if (userPicks < 2) {  //makes sure user only gets 2 picks
        userPicks++; //increases user picks            
        if (userPicks === 1) {
            card1 = clicked.parentNode.dataset.name;  //pulls name of card for matching purposes
            clicked.nextSibling.classList.add("choice");
            clicked.parentNode.classList.add("clickedOn");  //added click style here rather than css
        } if (userPicks === 2 && clicked !== card1) {
            card2 = clicked.parentNode.dataset.name;
            clicked.nextSibling.classList.add("choice");
            clicked.parentNode.classList.add("clickedOn");
        } if (userPicks === 2 && card1 !== card2) {  //tests that the user has picked 2 cards and they don't match
            setTimeout(resetPicks, delay);    //calls reset picks function and calls a delay before flipping back
        } else if (userPicks === 2 && card1 === card2) { // tests if user picks 2 card and they match
            setTimeout(matchedPicks, delay);
        }
    }

});

const resetPicks = () => {
    card1 = null;  //resets card1 and card2 choice and userPicks
    card2 = null;
    userPicks = 0;

    let choices = document.querySelectorAll(".choice");  //makes array of choices
    choices.forEach(card => {  //calls array and for each item does below actions
        card.classList.remove("choice");  //removes the choice class add when card was clicked
        card.parentNode.classList.remove("clickedOn");
        gameOver();
    })
}

const matchedPicks = () => {
    let choices = document.querySelectorAll(".choice");
    choices.forEach(card => {
        card.classList.remove("choice");
        card.classList.add("matched");
        gameOver();
    })
    card1 = null;
    card2 = null;
    userPicks = 0;
    previousTarget = null;
}

function startGame() {
    // creates grid, starts timer, removes cover when start button is clicked
    if (gridCreated === 0) {
        createGrid();
    }
    startTimer();
    document.getElementsByClassName("cover")[0].style.display = "none";
    document.getElementsByClassName("instructions")[0].style.display = "none";
    document.getElementsByClassName("instructions")[1].style.display = "none";
    audio.play();
    let userPicks = 0;
    grid.addEventListener("click", function (event) {
        let clicked = event.target;
        if (userPicks < 2) {
            userPicks++;
            clicked.parentNode.classList.add("clickedOn");
            // console.log(userPicks);
        }
    });
}

// Start and Reset Timer variables
let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval = null;
let timerOn = 0;

function startTimer() {
    timerOn++;
    if (timerOn === 1) {
        interval = setInterval(function () {
            if (second < 10) {
                timer.innerText = "0" + minute + " : 0" + second;
            } else if (minute < 60) {
                timer.innerText = "0" + minute + " : " + second;
            }

            second++
            if (second == 60) {
                minute++;
                second = 0;
            }
            // if (minute == 60) {
            //     hour++;
            //     minute = 0;
            // }
        }, 1000);
    }
}

function resetTimer() {
    timer.innerText = "";
    minute = 0;
    second = 0;
    timerOn = 0;
    clearInterval(interval);
}

//function that calls game over image overlay
function gameOver() {
    if (endGame.length == "20") {
        clearInterval(interval);
        let finalTime = timer.innerHTML;
        winImage.classList.add("show");
        document.getElementById("finalTime").innerHTML = finalTime;
        audio.pause();
        audio.currentTime = 0;
        hodor.play();
        document.querySelector(".card_grid").style.backgroundColor = "black";
        document.querySelector(".card_grid").style.border = "1px solid black";
    }
}

function resetGame() {
    // removes grid, displays the cover, pauses and resets audio
    removeGrid();
    winImage.classList.remove("show");
    document.getElementsByClassName("cover")[0].style.display = "block";
    gameGrid.sort(() => 0.5 - Math.random());
    audio.pause();
    audio.currentTime = 0;
    resetTimer();
}
