import "../styles/sketch03.scss";

function playSound(base) {
  const sound = new Audio(`/Audio/${base}.wav`);
  sound.play();
}

const buttons = document.querySelectorAll("button");

console.group("Buttons");
console.log(buttons);
console.groupEnd();


buttons.forEach((button) => {
  button.addEventListener("click", onClickFunction);

  function onClickFunction() {
    onClick(event);
  }

});


function onClick(event) {

  console.group("Button wurde geklickt");

  const button = event.target;

  const className = button.className;

  console.log(className);

  playSound(className);

  console.groupEnd();
}
