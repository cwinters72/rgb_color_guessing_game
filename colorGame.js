var numberOfSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

init();

function init() {
    setupModeButtons();
    setupSquares();
    resetButton.addEventListener("click", reset);
    reset();
}

function reset() {
     //generate all new colors
     colors = generateRandomColors(numberOfSquares);
     //pick a new random color from array
     pickedColor = pickColor();
     //change colorDisplay to match picked Color
     colorDisplay.textContent = pickedColor;
     messageDisplay.textContent = "";
     resetButton.textContent = "New Colors";
     //change colors of squares
     for(var i = 0; i < squares.length; i++) {
         if(colors[i]) {
             squares[i].style.display = "block";
             squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"; 
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function setupModeButtons() {
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
           //grab color of clicked square
           var clickedColor = this.style.backgroundColor;
           //compare color to pickedColor
           if(clickedColor === pickedColor) {
               messageDisplay.textContent = "Correct!";
               resetButton.textContent = "Play Again?"
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
           }else {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again!";
           }
       });
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push into arr  
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
