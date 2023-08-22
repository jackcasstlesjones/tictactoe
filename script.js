const selectDropDown = document.getElementById("number");
selectDropDown.addEventListener("change", function () {
  player2.takeTurn();
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
      //   console.log(gameBoard);
      console.log(this.turnCounter);
      return this.turnCounter;
    },
  };
}

player1 = playerFactory("Jack", "X");
player2 = playerFactory("Beans", "O");
console.log(player1.turnCounter);

console.log(player1.turnCounter);

const gameFlowModule = (function () {
  if (player1.turnCounter > player2.turnCounter) {
    console.log("player 2's go");
  } else console.log("player 1's go");
})();
