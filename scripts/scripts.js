var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");


green.onclick = function(){animateOnClick(green), playSound("green")};
red.onclick = function(){animateOnClick(red), playSound("red")};
yellow.onclick = function(){animateOnClick(yellow), playSound("yellow")};
blue.onclick = function(){animateOnClick(blue), playSound("blue")};


function animateOnClick(x){
    var init_color = x.style.backgroundColor;
    x.style.backgroundColor = 'lightgray';
    x.style.boxShadow = "0px 0px 40px lightgray";
    setTimeout(function(){
        x.style.backgroundColor = init_color;
        x.style.boxShadow = 'none';
    }, 50);
}


function playSound(x){
    var sound = new Audio("assets/sounds/" + x + ".mp3");
    sound.play();
}


function computerAnimate(x){
    x.style.opacity = "0.2";
    setTimeout(function(){
        x.style.opacity = "1";
    }, 100);
}
