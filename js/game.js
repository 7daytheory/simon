const buttonColors = ["red", "blue", "green", "yellow"];

const userPattern = [];
const gamePattern = [];

let level = 0;

//Start game on button click
$('body').keyup(function(e){
    if(e.keyCode == 83){
        // Start game when S btn is clicked
        nextSequence();
    }
 });

//Store user click data
$(".simonBtn").on("click", function() {

    //Add color to user pattern array
    let clickedColor = $(this).attr("id");
    userPattern.push(clickedColor);

    //Animate pressed button
    animatePress(clickedColor);
    
    //Play audio
    let audio = new Audio("sounds/" + clickedColor + ".mp3");
    audio.play();
})

//Add items to sequence
function nextSequence() {

//get random color and add it to game pattern array
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  //Animate randomized color
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  //play audio
  let audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();

  //Add level
  level++;

  //Update title to show what level the user is on
  $("#title").text("Level " + level);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


