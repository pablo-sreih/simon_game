var green_button = document.getElementById("green");
var red_button = document.getElementById("red");
var yellow_button = document.getElementById("yellow");
var blue_button = document.getElementById("blue");


var green_sound = new Audio("assets/sounds/green.mp3");
var red_sound = new Audio("assets/sounds/red.mp3");
var yellow_sound = new Audio("assets/sounds/yellow.mp3");
var blue_sound = new Audio("assets/sounds/blue.mp3");
var wrong_sound = new Audio("assets/sounds/wrong.mp3");


green_button.onclick = function(){animateOnClick(green_button), green_sound.play()};
red_button.onclick = function(){animateOnClick(red_button), red_sound.play()};
yellow_button.onclick = function(){animateOnClick(yellow_button), yellow_sound.play()};
blue_button.onclick = function(){animateOnClick(blue_button), blue_sound.play()};


function animateOnClick(x){
    var init_color = x.style.backgroundColor;
    x.style.backgroundColor = 'lightgray';
    x.style.boxShadow = "0px 0px 40px lightgray";
    setTimeout(function(){
        x.style.backgroundColor = init_color;
        x.style.boxShadow = 'none';
    }, 200);
}