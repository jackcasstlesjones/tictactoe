const selectDropDown = document.getElementById("number");
selectDropDown.addEventListener("change", function () {
  currentPlayer = gameFlowModule.choosePlayer();
  console.log(currentPlayer);
  currentPlayer.takeTurn();
});

let activePlayer = "";

const gameBoardModule = (function () {
  const gameBoardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return { gameBoardArray };
})();
let gameBoard = gameBoardModule.gameBoardArray;
// console.log(gameBoard);

function playerFactory(name, playerMarker) {
  return {
    turnCounter: 0,
    name,
    takeTurn() {
      this.turnCounter++;
      gameBoard.splice(selectDropDown.value, 1, playerMarker);
      console.log(gameBoard);
      console.log(this.turnCounter);
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
