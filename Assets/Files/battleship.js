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

//ships locations (array for coordinates), work on function to randomly generate ship locations//
ships: [
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]},

],

//fire function, (index location sor ships--for-loop)//
fire: function(guess) {
  for (var i = 0; i < this.numShips; i++)
}

//isSunk function (use index location for ships and boolean to determine if ship is sunk)



//function for guesses, (add criteria that =null if guess outside of coordinate area)//
  //use parseGuess maybe?? Also, need to research how to convert column letters to numbers//


  
//event handlers for fire button click and keypress for entering guess coordinates//
