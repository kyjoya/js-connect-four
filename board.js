function Board() {
  this.map = generateMap();
}

function generateMap() {
  var map = [];
  for (var i = 0; i < 6; i++) {
    map.push([]);
    for (var j = 0; j < 7; j++) {
      map[i].push(null);
    }
  }
  return map;
}

Board.prototype.updateMap = function(columnChoice, playerPiece) {
  for (var i = 0; i < this.map[columnChoice].length; i++) {
    if (this.map[columnChoice][i] === null) {
      this.map[columnChoice][i] = playerPiece;
      break;
    }
  }
}
