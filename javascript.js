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