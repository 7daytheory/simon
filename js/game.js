const buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

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
    userPattern = [];

    //Add color to user pattern array
    let clickedColor = $(this).attr("id");
    userPattern.push(clickedColor);

    //Animate pressed button
    animatePress(clickedColor);
    
    //Play audio
    playSound(clickedColor);

    let lastAnswer = userPattern.length - 1;
    checkSequence(lastAnswer);
})

//Add items to sequence
function nextSequence() {
//Add level
  level++;
  
//get random color and add it to game pattern array
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  gamePattern.push(randomColor);

  //Animate randomized color
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  //play audio
  let audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();

  //Update title to show what level the user is on
  $("#title").text("Level " + level);
}

function checkSequence(currentLevel) {
    let success = true;

    if(gamePattern[currentLevel] === userPattern[currentLevel]) {
        console.log("correct - next level!");

        if (userClickedPattern.length === gamePattern.length){ {
        setTimeout(function() {
            nextSequence()}, 1000);
        }
        } else {
            console.log("Game over!");
            alert("Wrong!");
        }
    }
}

function playSound(sound) {
    //play audio
    let audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

