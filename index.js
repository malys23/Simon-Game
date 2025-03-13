let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var toggleStart = false;

//function to play sounds
function playSound(name){
    //var audio = new Audio(`./sounds/${name}.mp3`);
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

//function to animate press
function animatePress(currentColor){
    $("#" + currentColor).addClass('pressed');
    setTimeout(()=>{
        $("#" + currentColor).removeClass('pressed');
    }, 100);
}

//to check if game is started
$(document).on("keypress", function(){
    if(!toggleStart){
        $("#level-title").text("Level " + level);
        nextSequence();
        toggleStart = true;
    }
});

//function to detect button click and save input
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

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
    playSound(randomChosenColour);
};