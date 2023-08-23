const gameboardContainer = document.getElementById("gameboard-container");
const gridSquares = document.querySelectorAll(".game-square");

let activePlayer = "";

const gameBoardModule = (function () {
  const gameBoardArray = [, , , , , , , ,];
  return { gameBoardArray };
})();
let gameBoard = gameBoardModule.gameBoardArray;

const populateBoardModule = (function () {
  const showOnBoard = function () {
    for (let i = 0; i < gameBoard.length; i++) {
      gridSquares[i].textContent = gameBoard[i];
    }
  };
  return { showOnBoard };
})();

for (let i = 0; i < gridSquares.length; i++) {
  gridSquares[i].addEventListener("click", function () {
    console.log("poo");
    currentPlayer = gameFlowModule.choosePlayer();
    // console.log(currentPlayer);
    currentPlayer.takeTurn(i);
  });
}

function playerFactory(name, playerMarker) {
  return {
    turnCounter: 0,
    name,
    takeTurn(i) {
      this.turnCounter++;
      gameBoard.splice(i, 1, playerMarker);
      //   console.log(gameBoard);
      //   console.log(this.turnCounter);
      populateBoardModule.showOnBoard();
      return this.turnCounter;
    },
  };
}

player1 = playerFactory("Jack", "X");
player2 = playerFactory("Beans", "O");

const gameFlowModule = (function () {
  const choosePlayer = function () {
    if (player1.turnCounter > player2.turnCounter) {
      return player2;
    } else {
      return player1;
    }
  };
  return { choosePlayer };
})();

gameFlowModule.choosePlayer();
