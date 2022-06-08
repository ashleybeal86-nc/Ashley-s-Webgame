var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

//set up parameters for ships//
var shipmodel = {
  gameboardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
};

//ships locations (arrays for coordinates and hits)//
var ships = [
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]},
];

// function to randomly generate ship locations (Math.random or Math.floor or both maybe?--need to research this more)//
  //also need to generate a starting column/row and new ship location//
generateShip = function() {

}


//fire function, (index location sor ships--for-loop)//
fire = function(guess) {
  for (var i = 0; i < this.numShips; i++)
}

//Sunk function (use index location for ships and boolean to determine if ship is sunk?)
isSunk = function(ship){

}


//function for guesses, (add criteria that =null if guess outside of coordinate area)//
  //use parseGuess maybe?? Also, need to research how to convert A-G column letters to numbers//
  function parseGuess(guess) {

}


//event handlers for fire button click and keyboard keypress for entering guess coordinates in input box//
var fireButton = document.getElementById("fireButton");
fireButton.onclick = handleFireButton;

function handleFireButton() {

}