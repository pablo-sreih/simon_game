
// Global Variables
var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var title = document.getElementById("head-title");

var game_start = false;
var mainPattern = [];
var playerPattern = [];
var level = 0;
var count = 0;


// Press a key to start game
// Reset the counters
function startGame() {
  title.innerText = "Press A Key to Start"
  onkeydown = function() {
    if (game_start === false){
      mainPattern = [];
      playerPattern = [];
      level = 0;
      count = 0;
      game_start = true;
      playGame();
    }
  }
  ontouchstart = function() {
    if (game_start === false){
      mainPattern = [];
      playerPattern = [];
      level = 0;
      count = 0;
      game_start = true;
      playGame();
    }
  }
}


// Call the function startGame to start
startGame()


// Function for when the game starts
function playGame() {
  count = 0;
  level ++;
  title.innerText = "Level " + level;
  playerPattern = [];
  var pick_random = Math.floor(Math.random() * 4);
  
  setTimeout(() => {
    if (pick_random === 0) {
      mainPattern.push("green");
      animateButtons(green);
      addSound("green");
    } else if (pick_random === 1) {
      mainPattern.push("red");
      animateButtons(red);
      addSound("red");
    } else if (pick_random === 2) {
      mainPattern.push("yellow");
      animateButtons(yellow);
      addSound("yellow");
    } else if (pick_random === 3) {
      mainPattern.push("blue");
      animateButtons(blue);
      addSound("blue");
    }
  }, 500);
}


// To check for equality in sequences
function checkSequence() {
  console.log(count)
  if (playerPattern[count] === mainPattern[count] && count == 0 && level == 1){
    console.log("first if: executed")
    setTimeout(() => {
      playGame();
    }, 500);
  } else if (playerPattern[count] == mainPattern[count] && count < mainPattern.length - 1){
    console.log("second if executed")
    console.log(count)
    count++;
  } else if (playerPattern[count] !== mainPattern[count]){
    console.log("third if executed")
    title.innerText = "Game Over";
    addSound("wrong");
    setTimeout(() => {
      game_start = false;
      startGame()
    }, 1000);
  } else if (playerPattern[count] == mainPattern[count] && count == mainPattern.length - 1) {
    console.log("fourth if executed")
    setTimeout(() => {
      playGame();
    }, 500); 
  }
}


// Event Listeners for buttons
green.addEventListener("click", () => {
  playerPattern.push("green"),
  animateButtons(green),
  addSound("green"),
  checkSequence()
})

red.addEventListener("click", () => {
  playerPattern.push("red"),
  animateButtons(red),
  addSound("red"),
  checkSequence()
})

yellow.addEventListener("click", () => {
  playerPattern.push("yellow"),
  animateButtons(yellow),
  addSound("yellow"),
  checkSequence()
})

blue.addEventListener("click", () => {
  playerPattern.push("blue"),
  animateButtons(blue),
  addSound("blue"),
  checkSequence()
})


// Button Animations
function animateButtons(x) {
  if (x === green){
    x.style.backgroundColor = "lightgreen";
    x.style.boxShadow = "0px 0px 40px white";
    setTimeout(() => {
      x.style.backgroundColor = "green";
      x.style.boxShadow = "none";
    }, 200);
  }

  if (x === red){
    x.style.backgroundColor = "lightcoral";
    x.style.boxShadow = "0px 0px 40px white";
    setTimeout(() => {
      x.style.backgroundColor = "red";
      x.style.boxShadow = "none";
    }, 200);
  }

  if (x === yellow){
    x.style.backgroundColor = "#FFFF99";
    x.style.boxShadow = "0px 0px 40px white";
    setTimeout(() => {
      x.style.backgroundColor = "yellow";
      x.style.boxShadow = "none";
    }, 200);
  }

  if (x === blue){
    x.style.backgroundColor = "lightskyblue";
    x.style.boxShadow = "0px 0px 40px white";
    setTimeout(() => {
      x.style.backgroundColor = "blue";
      x.style.boxShadow = "none";
    }, 200);
  }
}


// Add sound when button is pressed
function addSound(x) {
  var sound = new Audio("assets/sounds/" + x + ".mp3");
  sound.play();
}