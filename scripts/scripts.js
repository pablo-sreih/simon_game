var green_button = document.getElementById("green");
var red_button = document.getElementById("red");
var yellow_button = document.getElementById("yellow");
var blue_button = document.getElementById("blue");

green_button.onclick = function(){animateOnClick(green_button)};
red_button.onclick = function(){animateOnClick(red_button)};
yellow_button.onclick = function(){animateOnClick(yellow_button)};
blue_button.onclick = function(){animateOnClick(blue_button)};


function animateOnClick(x){
    var init_color = x.style.backgroundColor;
    x.style.backgroundColor = 'lightgray';
    x.style.boxShadow = "0px 0px 40px lightgray";
    setTimeout(function(){
        x.style.backgroundColor = init_color;
        x.style.boxShadow = 'none';
    }, 100);
}