const gridSquares = document.querySelectorAll(".game-square");

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
      });
    }
  };
  return { gridSquaresEventListener, choosePlayer, showOnBoard };
})();

gameFlowModule.gridSquaresEventListener();
player1 = playerFactory("Jack", "X");
player2 = playerFactory("Beans", "O");
