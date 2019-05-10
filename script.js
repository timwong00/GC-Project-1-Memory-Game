"use strict";
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
]


let gameGrid = [...cardArray, ...cardArray]; //uses spread operator to double the cardarray into new array called gamegrid
gameGrid.sort(() => 0.5 - Math.random());   //randomizs the gamegrid array using

const grid = document.getElementById("game");  //accesses the section in HTML with ID game
//adds the class grid to our sectiom element
// grid.classList.add("grid");
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
let userPicks = 0;  //declares a variable to try user choices, sets it at 0
let card1 = null;
let card2 = null;


grid.addEventListener("click", function (event) {
    console.log(event);
    let clicked = event.target;
    if (clicked.parentNode.classList.contains("choice")) {  //add class for choice with click, this line makes it so if they click the same card it doesn't count as a choice
        return;
    }
    if (userPicks < 2 ) {  //makes sure user only gets 2 picks
        userPicks++;       //increases user picks
        console.log(userPicks);
        if (userPicks === 1) {
            card1 = clicked.parentNode.dataset.name;  //pulls name of card for matching purposes
            console.log(card1);  //just using to check funcality of above code
            clicked.parentNode.classList.add("choice"); 
            clicked.parentNode.style.transform = "rotateY(180deg)";  //added click style here rather than css
        } if (userPicks === 2 && clicked !== card1) {
            card2 = clicked.parentNode.dataset.name;
            console.log(card2);
            clicked.parentNode.classList.add("choice");
            clicked.parentNode.style.transform = "rotateY(180deg)";
        } if (userPicks === 2 && card1 !== card2 ) {
            resetPicks();
        }
    }
});

const resetPicks = () => {
    card1 = null;
    card2 = null;
    userPicks = 0;

    let choices = document.querySelectorAll(".choice");
    choices.forEach(card => {
        card.classList.remove("choice");
        card.classList.add("unmatched");
    })
}
//need to continue to fix user choices 
//need to make sure if user clicks on same card it doesn't count as a choice
//make it so it flips cards back if they are wrong
// add a function to handle matching and removing cards