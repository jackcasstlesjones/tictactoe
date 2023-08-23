const gridSquares = document.querySelectorAll(".game-square");
const resultsDiv = document.getElementById("results-div");
const playerOneNameInput = document.getElementById("player-one");
const playerTwoNameInput = document.getElementById("player-two");
const submitBtn = document.getElementById("submit-button");

let playerOneName = "";
let playerTwoName = "";

submitBtn.addEventListener("click", function () {
  playerOneName = getPlayerOneName();
  playerTwoName = getPlayerTwoName();
});

function getPlayerOneName() {
  return playerOneNameInput.value;
}
function getPlayerTwoName() {
  return playerTwoNameInput.value;
}

const gameBoardModule = (function () {
  const gameBoardArray = [, , , , , , , ,];
  return { gameBoardArray };
})();
let gameBoard = gameBoardModule.gameBoardArray;

/////////////// Player Objects ///////////////
function playerFactory(name, playerMarker) {
  return {
    turnCounter: 0,
    name,
    takeTurn(i) {
      this.turnCounter++;
      gameBoard.splice(i, 1, playerMarker);
      gameFlowModule.showOnBoard();
      return this.turnCounter;
    },
  };
}

////////// Check winner ////////////

////////////// Game Flow Module /////////////////

const gameFlowModule = (function () {
  const choosePlayer = function () {
    if (player1.turnCounter > player2.turnCounter) {
      return player2;
    } else {
      return player1;
    }
  };

  const showOnBoard = function () {
    for (let i = 0; i < gameBoard.length; i++) {
      gridSquares[i].textContent = gameBoard[i];
    }
  };

  const gridSquaresEventListener = function () {
    for (let i = 0; i < gridSquares.length; i++) {
      gridSquares[i].addEventListener("click", function () {
        if (gameBoard[i] === "X" || gameBoard[i] === "O") {
          return;
        }
        currentPlayer = gameFlowModule.choosePlayer();
        currentPlayer.takeTurn(i);
        checkWin();
      });
    }
  };

  function checkWin() {
    console.log(gameBoard);
    let indexesX = [];
    let indexesO = [];
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === "X") {
        indexesX.push(i);
      } else if (gameBoard[i] === "O") {
        indexesO.push(i);
      }
    }
    if (
      (indexesX.includes(0) && indexesX.includes(1) && indexesX.includes(2)) ||
      (indexesX.includes(3) && indexesX.includes(4) && indexesX.includes(5)) ||
      (indexesX.includes(6) && indexesX.includes(7) && indexesX.includes(8)) ||
      (indexesX.includes(0) && indexesX.includes(3) && indexesX.includes(6)) ||
      (indexesX.includes(1) && indexesX.includes(4) && indexesX.includes(7)) ||
      (indexesX.includes(2) && indexesX.includes(5) && indexesX.includes(8)) ||
      (indexesX.includes(0) && indexesX.includes(4) && indexesX.includes(8)) ||
      (indexesX.includes(2) && indexesX.includes(4) && indexesX.includes(6))
    ) {
      return (resultsDiv.textContent = `${player1.name} is winner!`);
    } else if (
      (indexesO.includes(0) && indexesO.includes(1) && indexesO.includes(2)) ||
      (indexesO.includes(3) && indexesO.includes(4) && indexesO.includes(5)) ||
      (indexesO.includes(6) && indexesO.includes(7) && indexesO.includes(8)) ||
      (indexesO.includes(0) && indexesO.includes(3) && indexesO.includes(6)) ||
      (indexesO.includes(1) && indexesO.includes(4) && indexesO.includes(7)) ||
      (indexesO.includes(2) && indexesO.includes(5) && indexesO.includes(8)) ||
      (indexesO.includes(0) && indexesO.includes(4) && indexesO.includes(8)) ||
      (indexesO.includes(2) && indexesO.includes(4) && indexesO.includes(6))
    ) {
      return (resultsDiv.textContent = `${player2.name} is winner!`);
    } else if (gameBoard.includes(undefined) === false) {
      return (resultsDiv.textContent = "It's a draw!");
    }
  }

  return { gridSquaresEventListener, choosePlayer, showOnBoard, checkWin };
})();

gameFlowModule.gridSquaresEventListener();
player1 = playerFactory("Jack", "X");
player2 = playerFactory("Claire", "O");
