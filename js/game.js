const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();
}

nextSequence();




