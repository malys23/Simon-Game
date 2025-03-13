let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var toggleStart = false;
var correct = false;

//function to play SOUNDS
function playSound(name){
    //var audio = new Audio(`./sounds/${name}.mp3`);
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

//function to ANIMATE press
function animatePress(currentColor){
    $("#" + currentColor).addClass('pressed');
    setTimeout(()=>{
        $("#" + currentColor).removeClass('pressed');
    }, 100);
}

//to check if game is STARTED
$(document).keypress(function(){
    if(!toggleStart){
        $("#level-title").text("Level " + level);
        nextSequence();
        toggleStart = true;
    }
});

//function to DETECT BUTTON click and save input
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

//function to generate number from  0 to 3
function nextSequence(){
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    //choose color based on random number
    var randomChosenColour = buttonColors[randomNumber];
    //push new color into gamePattern
    gamePattern.push(randomChosenColour);

    for(let i=0; i<gamePattern.length; i++){
        setTimeout(()=>{
            //to make specified random color to flash
            $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
            //to make specified random button play sound when flashing
            playSound(gamePattern[i]);
        },i*300)
    }
}

//function to check answer and tell if WRONG and RESTART
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }} else { //if false, restart the game
        console.log("wrong");
        $("body").addClass('game-over');
        setTimeout(() => {
            $("body").removeClass('game-over');
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        setTimeout(function () {
            startOver();
          }, 1000);
    }
}

//function to clear everything to start over
function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    toggleStart = false;
    correct = false;
}