let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//function to generate number from  0 to 3
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
}

//choose color based on random number
var randomChosenColour = buttonColors[nextSequence()];
//push new color into gamePattern
gamePattern = gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).setTimer(animate({opacity: "0.2"}),100);