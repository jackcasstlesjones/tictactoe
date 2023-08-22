function playerFactory(name) {
  let turnCounter = 0;
  return {
    name,
    takeTurn() {
      turnCounter++;
      console.log(turnCounter);
    },
  };
}

const gameBoardModule = (function () {
  const gameBoardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return { gameBoardArray };
})();

console.log(gameBoardModule.gameBoardArray);

player1 = playerFactory("Jack");
player1.takeTurn();
