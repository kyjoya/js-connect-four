function Game(player1, player2) {
function Game(player1, player2) {
  this.players = [new User(player1), new User(player2)];
  this.init();

  this.startTurn();
  // this.endgame
}

Game.prototype.init = function() {
  this.board = new Board();
  this.view = new View();

  this.state = { turn: 0, haveWinner: false };
};

Game.prototype.play = function() {
  // get current player

  // get piece placement from player -- column number
  // validate column choice (board validates)
  // update board - board knows where pieces are -- also knows columns and rows
  // update view to reflect new Board
  // check for winner
  // update state (turn and winner?)
};

Game.prototype.startTurn = function() {
  var player = this.players[this.state.turn % 2];
  this.view.printBoard(this.board);
  console.log(player.name +"s turn. Call game.choose with your column choice");
};

Game.prototype.choose = function(columnChoice) {
  this.board.updateMap(columnChoice, this.state.turn % 2 );
  this.checkWinner();
};

Game.prototype.checkWinner = function() {
  this.state.turn++;
  this.startTurn();
};
