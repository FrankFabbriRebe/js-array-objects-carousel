const images = [ 
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chao", 
    }, 

    { 
        image: 'img/04.webp',
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    },
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// selection of all the elemnts with item class
const items = document.getElementsByClassName("item");
//console.log(items);

// selection of the buttons
const up = document.querySelector(".up");
//console.log(up);

const down = document.querySelector(".down");
//console.log(down);

let activeItem = 0;

//events on click up button
up.addEventListener("click", function() {

    if (activeItem < items.length - 1)  {

        //delete class active to the element
        items[activeItem].classList.remove("active");

        activeItem++;

        //add class active to the next element
        items[activeItem].classList.add("active");

    }

     //delete up button
     if (activeItem === items.length - 1)    {
        up.classList.add("hidden");
    }

    //show down button
    down.classList.remove("hidden");

});

// events on click down button
down.addEventListener("click", function() {

   if (activeItem > 0) {

        //delete class active to the element
        items[activeItem].classList.remove("active");

        activeItem--;

        //add class active to the next element
        items[activeItem].classList.add("active");

   }

    //delete down button
    if (activeItem === 0)   {
        down.classList.add("hidden")
    }

    //shoow up button
    up.classList.remove("hidden");

});