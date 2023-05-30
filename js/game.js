const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  console.log(randomColor);
}

nextSequence();




