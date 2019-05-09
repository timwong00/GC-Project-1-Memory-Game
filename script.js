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


let gameGrid = cardArray.concat(cardArray);
gameGrid.sort(() => 0.5 - Math.random());

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
    if (userPicks < 2) {  //makes sure user only gets 2 picks
        userPicks++;       //increases user picks
        if (userPicks === 1) {
            card1 = clicked.dataset.name;
            console.log(card1);
            clicked.classList.add("clickedOn");
        } if (userPicks === 2) {
            card2 = clicked.dataset.name;
            clicked.classList.add("clickedOn");
        }
    }
});
