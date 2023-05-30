const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

let randomColor;

function nextSequence() {
  return Math.floor(Math.random() * 4);
}

let randomNum = nextSequence();

randomColor = buttonColors[randomNum];
gamePattern.push(randomColor);

console.log(gamePattern);

