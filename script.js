const selectDropDown = document.getElementById("number");
selectDropDown.addEventListener("change", function () {
  currentPlayer = gameFlowModule.choosePlayer();
  console.log(currentPlayer);
  currentPlayer.takeTurn();
});

const gameboardContainer = document.getElementById("gameboard-container");

let activePlayer = "";

const gameBoardModule = (function () {
  const gameBoardArray = [, , , , , , , ,];
  return { gameBoardArray };
})();
let gameBoard = gameBoardModule.gameBoardArray;

const populateBoardModule = (function () {
  const gridSquares = document.querySelectorAll(".game-square");
  const showOnBoard = function () {
    for (let i = 0; i < gameBoard.length; i++) {
      gridSquares[i].textContent = gameBoard[i];
    }
  };
  return { showOnBoard };
})();

function playerFactory(name, playerMarker) {
  return {
    turnCounter: 0,
    name,
    takeTurn() {
      this.turnCounter++;
      gameBoard.splice(selectDropDown.value - 1, 1, playerMarker);
      console.log(gameBoard);
      console.log(this.turnCounter);
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
