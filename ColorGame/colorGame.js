var colors = [];
var pickedColor;
var numSquares = 6;
//seleting elements to manipulate
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var header =  document.getElementById("header");
var squares = document.querySelectorAll(".square");
var resetButton = document.getElementById("button");
var messageDisplay = document.querySelector("#message");
var modeButtons = document.body.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");

init();

//Manipulating Reset Button when it is clicked
resetButton.addEventListener("click", function(){
  reset();
});
//Function for displaying game initially 
function init(){
  setupModeButtons();
  setupSquares();
  reset();
};
//Function for setup of mode buttons
function setupModeButtons(){
//Mode Buttons eventListner
 for(var i = 0; i< modeButtons.length; i++){
   modeButtons[i].addEventListener("click", function(){
     modeButtons[0].classList.remove("selected");
     modeButtons[1].classList.remove("selected");
     this.classList.add("selected");
     this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
     reset();
   });
 }
}
//Function for setup of all the squares
function setupSquares(){
  //Loop for Manipulating the squares and Display messages and buttons when squares is clicked
  for (var i = 0; i < squares.length; i++) {
    //Adding eventListner to Squares when it is clicked
    squares[i].addEventListener("click", function (){
      //Setting a variable to keep track of selected color
      var clickedColor = this.style.backgroundColor;
      //condition whether the clicked color is the right or not
      if (pickedColor === clickedColor) {//Is yes
        //Changing background of navBar to same color
        header.style.backgroundColor = clickedColor;
        //Displaying Correct Message
        messageDisplay.textContent = "Correct!";
        //Changing colors of all squares same to the right color
        changeColors(clickedColor);
        //manipulating reset button 
        resetButton.textContent = "Play Again?" 
      }else {
        //Displaying msg
        messageDisplay.textContent = "Try Again"; 
        //Manipulating the square color same as background
        this.style.backgroundColor = "#232323";
      }
    });
  }
}
//Function for resetting the game
function reset(){
  //Changing content  and displayMessage
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //Generating 6 random colors
  colors = getRandomColors(numSquares);
  //Picking one color for the guess
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    //Displaying The colors 
    if(colors[i]){
     squares[i].style.display = "block";
     squares[i].style.backgroundColor = colors[i];
    }else{
     squares[i].style.display = "none";
    }    
  }
  //Resetting the backgroundColor
  header.style.backgroundColor = "steelblue";
};
//Function for Changing color to a single color
function changeColors(color){
  for(var i = 0; i< colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

//Function for picking a randon index for colors array
function pickColor(){
  //Math.random->function for generating a random number between 0-1
  //Math.floor->function for rounding a number by ignoring decimal digits
  var random = Math.floor(Math.random() * colors.length); 
  //returning Random color
  return colors[random];
}

//Function for generating an array of random rgb values
function getRandomColors(num){
  //creating array
  var arr = [];
  //Assigning each elements a random color
  for(var i = 0; i < num; i++){
    arr[i] = randomColor();
  }
  //return array
  return arr;
}

//Function for generating random rgb values 
function randomColor(){
  //Picking a random number b/w 0-255 for red
  var r = Math.floor(Math.random()*256);
  //Picking a random number b/w 0-255 for green
  var g = Math.floor(Math.random()*256);
  //Picking a random number b/w 0-255 for blue
  var b = Math.floor(Math.random()*256);
  var selectedColor = "rgb(" + r + ", " + g + ", "+ b + ")";
  //returning random rgb values
  return selectedColor;
}