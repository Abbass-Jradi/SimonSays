/* variables section */
let isStarted = false;
var level = 0;
var colors = ['green', 'red', 'yellow', 'blue'];
var elements = " ";
var sequenceColors = [];
var playerColors = [];
var temp = 0;

/* Press any key to start function */
window.addEventListener('keydown', start)
function start() {
    document.getElementsByTagName('html')[0].style.backgroundColor = "rgb(3, 3, 63)";
    if (isStarted === false) {
        document.getElementById('main-prompt').innerHTML = "Level: " + level;
        generateSequence();
        isStarted = true;
    }
}

/* Generate sequence */
function generateSequence() {
    level = level + 1;

    var randNumber = Math.floor(Math.random() * 4);
    var colorToShow = colors[randNumber];

    sequenceColors.push(colorToShow);

    document.getElementById('main-prompt').innerHTML = "Level: " + level;

    setTimeout(function () {
        document.getElementById(colorToShow).style.backgroundColor = "white";
    }, 500);

    setTimeout(function () {
        document.getElementById(colorToShow).style.backgroundColor = colorToShow;
    }, 900);

    var audio = new Audio("sounds/" + colorToShow + ".mp3");
    audio.play();
}