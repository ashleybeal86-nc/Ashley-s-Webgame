///making the model object for ships
 //got help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
  ],

  ///fire function, is sunk function, generate ship location function
  //got help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (ship.hits[index] === "hit") {
        view.displayMessage("You already hit that location!");
        return true;
      } else if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
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

  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function () {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
    console.log("Ships array: ");
    console.log(this.ships);
  },

  ///generate ship function to return new ship location function
  //got help from https://www.w3schools.com/js/js_random.asp
  //got help from https://stackoverflow.com/questions/12272239/javascript-function-returning-an-object

  generateShip: function () {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));

      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },

  ///collision function
  //got help from https://stackoverflow.com/questions/2440377/javascript-collision-detection
  //got help from https://stackoverflow.com/questions/21435555/prevent-collision-or-intersection-of-canvas-objects
  
  collision: function (locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};


///display messages for hits and misses
 //got help from https://stackoverflow.com/questions/30709036/how-to-use-innerhtml-to-display-text

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



///controller and process guess function
   //got help from https://stackoverflow.com/questions/30392345/javascript-guessing-game-keeping-a-log-of-guesses


var controller = {
  guesses: 0,

  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "You sank all my battleships, in " + this.guesses + " guesses"
        );
      }
    }
  },
};

///converting players letter coordinate guess to number value
 //got help from https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
 //got help from https://www.geeksforgeeks.org/number-guessing-game-using-javascript/

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Please enter a letter and a number on the board!");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("That isn't on the board!");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("That's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}

///firebutton and keypress functions & eventListeners
 //got help from https://eloquentjavascript.net/2nd_edition/14_event.html
//got help from https://www.w3schools.com/graphics/game_controllers.asp

function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value.toUpperCase();

  controller.processGuess(guess);

  guessInput.value = "";
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  e = e || window.event;

  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}


////window onload and initialize
 //got help from https://linuxhint.com/window-onload-event-in-javascript/#:~:text=JavaScript%20has%20a%20window%20onload,object%20is%20loaded%20in%20HTML.

window.onload = init;

function init() {
  fireButton.onclick = handleFireButton;

  var guessInput = document.getElementById("guessInput");
  guessInput.KeyboardEvent = handleKeyPress;

  model.generateShipLocations();
}
