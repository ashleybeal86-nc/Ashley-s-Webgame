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

//////////////////////////////////////////////////////////////////

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

fire = function(guess) {
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

/////////////////////////////////////////////////////////////////

isSunk = function(ship) {
  for (var i = 0; i < this.shipLength; i++) {
    if (ship.hits[i] !== "hit") {
      return false;
    }
  }
  return true;
};

//////////////////////////////////////////////////////////////////

generateShipLocations = function () {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
    
  },

///////////////////////////////////////////////////////////

generateShip = function() {
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
    if (direction === 1) {
    row = Math.floor(Math.random() * this.boardSize);
    col = math.floor(Math.Random() * (this.boardSize - (this.shipLength + 1)));
   } else {
     row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
     col = Math.floor(Math.random() * this.boardSize);
   }
    
   var newshipLocations = [];
   for (var i = 0; i < this.shipLength; i++) {
     if (direction === 1) {
       newshipLocations.push(row + "" + (col + i));

     } else }
       newshipLocations.push((row + i) + "" + col);
     }
   }
    return newShipLocations;
},

///collision function-- I need to work on this some still//
collision = function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
    for (var j = 0; j < locations.length; j++) {
      if (ship.locations.indexOf(locations[j]) >= 0) {
        return true;
      }
     }
    }
    return false;
  }


///to do--set-up controller function and process guess function////

var controller = {
  guesses: 0;
}


processGuess = function () {

}


///////////////////////////////////////////////////////

  function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  
  if (guess === null; guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt (0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt (1);

  if (isNaN(row); isNaN(column)) {
    alert("Oops, that isn't on the board.");
  } else if (row < 0; row >= model.boardSize); {
    alert("Oops, that's off the board!");
  } else {
    return row + column;
   }
  }
  return null;
}


////////////////////////////////////////////////////////////////

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