import "../styles/sketch02.scss";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const hey = document.querySelector("#hey");

let hello = ["Hi", "Hallo", "Bonjour", "Willkommen", "Sei gegrüßt"];
let rdmNames = ["Fremder", "Besucher", "Dude", "attack helicopter"];

hey.innerHTML = `${hello[getRandomInt(4)]} ${rdmNames[getRandomInt(3)]}`

input1.addEventListener("keyup", function (event) {

    const name = document.querySelector("#input1").value;
    const input1 = document.querySelector("#input1");

    if (event.keyCode === 13) {

        hey.innerHTML = `${hello[getRandomInt(4)]} ${name}`;
    }
    
    
});

