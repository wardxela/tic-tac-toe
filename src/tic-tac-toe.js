class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.winner = null;
    this.playground = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.playground[rowIndex][columnIndex]) {
      this.playground[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) {
      return true;
    }
    return false;
  }

  getWinner() {
    for (let i = 0; i < this.playground.length; i++) {
      if (
        this.playground[i][0] &&
        this.playground[i][0] === this.playground[i][1] &&
        this.playground[i][1] === this.playground[i][2]
      ) {
        return (this.winner = this.playground[i][0]);
      } else if (
        this.playground[0][i] &&
        this.playground[0][i] === this.playground[1][i] &&
        this.playground[1][i] === this.playground[2][i]
      ) {
        return (this.winner = this.playground[0][i]);
      }
    }
    if (
      (this.playground[0][0] === this.playground[1][1] &&
        this.playground[1][1] === this.playground[2][2]) ||
      (this.playground[0][2] === this.playground[1][1] &&
        this.playground[1][1] === this.playground[2][0])
    )
      return (this.winner = this.playground[1][1]);
    return this.winner;
  }

  noMoreTurns() {
    for (let i = 0; i < this.playground.length; i++) {
      for (let j = 0; j < this.playground[i].length; j++) {
        if (this.playground[i][j] === null) return false;
      }
    }
    return true;
  }

  isDraw() {
    if (!this.getWinner() && this.noMoreTurns()) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.playground[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
