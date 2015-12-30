function View() {
  console.log("Ready to play?");

}

View.prototype.printBoard = function(board) {
  for(var i = 0; i < board.map.length; i++) {
    var row = "";
    row+=i + ". ";
    row+="|";
    for(var j = 0; j < board.map[i].length ; j++) {
      switch (board.map[i][j]) {
        case null:
          row+="_";
          break;
        case 0:
          row+="O";
          break;
        case 1:
          row+="1";
          break;
      }
      row+="|";
    }
    console.log(row);
  }
  console.log("\n");
};
