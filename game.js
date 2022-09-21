const btnColors = ["red", "blue", "green", "yellow"];

const gameColors = [];

function nextSequence() {
  let randomChosenColour;
  let randomNum = Math.floor(Math.random() * 4);

  randomChosenColour = btnColors[randomNum];

  gameColors.push(randomChosenColour);

  console.log(gameColors);
}

nextSequence();
