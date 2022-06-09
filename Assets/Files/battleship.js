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

ships = [
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]},
  {locations: [0,0,0], hits: ["", "", ""]}, ],

fire: function(guess) {
  for (var i = 0; i < this.numShips; i++) {
    var ship = this.ships[i];
    var index = ship.locations.indexOf(guess);
    if (index >= 0) {
      ship.hits[index] = "hit";
      view.displayMessage("HIT!");
      if (this.isSunk(ship)) {
        view.displayMessage("You Sank My Battleship!");
        this.shipsSunk++;
      }
      return true;
   }
}
    
      view.displayMiss(guess);
      view.displayMessage("You Missed!");
      return false;
},

isSunk = function(ship) {
  for (var i = 0; i < this.shipLength; i++) {
    if (ship.hits[i] !== "hit") {
      return false;
    }
  }
  return true;
};


  generateShipLocations = function () {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
    
  },

  generateShip = function() {
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
    if (direction === 1) {
      var newShipLocations = [];
      for (var i = 0; i < this.shipLength; i++);{
        if (direction === 1) {
        } else {
        }
      } 
    return newShipLocations;
  },













//function for guesses, (add criteria that =null if guess outside of coordinate area)//
  //use parseGuess maybe?? Also, need to research how to convert A-G column letters to numbers//
  function parseGuess(guess) {

}


//event handlers for fire button click and keyboard keypress for entering guess coordinates in input box//
function init () {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}