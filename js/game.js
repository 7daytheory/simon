const buttonColors = ["red", "blue", "green", "yellow"];

const userPattern = [];
const gamePattern = [];

//Store user click data
$(".simonBtn").on("click", function() {
    let clickedColor = $(this).attr("id");

    userPattern.push(clickedColor);
    console.log(userPattern);
})

//Add items to sequence
function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();
}



