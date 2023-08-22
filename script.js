const selectDropDown = document.getElementById("number");
selectDropDown.addEventListener("change", function () {
  player2.takeTurn();
});

const gameBoardModule = (function () {
  const gameBoardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return { gameBoardArray };
})();
let gameBoard = gameBoardModule.gameBoardArray;
// console.log(gameBoard);

function playerFactory(name, playerMarker) {
  let turnCounter = 0;
  return {
    name,
    takeTurn() {
      turnCounter++;
      gameBoard.splice(selectDropDown.value, 1, playerMarker);
      console.log(turnCounter);
      console.log(gameBoard);
    },
  };
}

player1 = playerFactory("Jack", "X");
player2 = playerFactory("Beans", "O");
// player1.takeTurn();
// player2.takeTurn();
