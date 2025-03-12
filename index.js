let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//function to generate number from  0 to 3
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);

    //choose color based on random number
    var randomChosenColour = buttonColors[randomNumber];
    //push new color into gamePattern
    gamePattern = gamePattern.push(randomChosenColour);

    //to make specified random color to flash
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    //to make specified random button play sound when flashing
    var audio = new Audio(`./sounds/${randomChosenColour}.mp3`)
    audio.play();
}

