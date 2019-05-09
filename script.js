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
grid.classList.add("grid");
gameGrid.forEach(item => {                       //for each image in our array
    const card = document.createElement("div");  //we create a div with a class card
    card.classList.add("card");
    card.dataset.name = item.name;
    const front = document.createElement("div"); //another div for the front of the card with class front
    front.classList.add("front");
    const back = document.createElement("div");  //and another div with the class back
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;  //sets the image for the back of the card
    // card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});
let userPicks = 0;
grid.addEventListener("click", function(event) {
    let clicked = event.target;
    if (userPicks < 2) {
        userPicks++;
        clicked.parentNode.classList.add("clickedOn");
        console.log(userPicks);
    }
  });