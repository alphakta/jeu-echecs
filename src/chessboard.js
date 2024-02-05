const ChessPiece = require("./chesspiece");

class ChessBoard {
  constructor() {
    this.board = this.initializeBoard();
  }

  initializeBoard() {
    const namePiece = [
      "Rook",
      "Knight",
      "Bishop",
      "Queen",
      "King",
      "Bishop",
      "Knight",
      "Rook",
    ];
    const colorPiece = ["Black", "White"];
    const pawnPiece = "Pawn";

    const board = new Array(8).fill(null).map(() => new Array(8).fill(null));

    for (let i = 0; i < 8; i++) {
      board[0][i] = new ChessPiece(namePiece[i], colorPiece[0]);
      board[1][i] = new ChessPiece(pawnPiece, colorPiece[0]);
      board[6][i] = new ChessPiece(pawnPiece, colorPiece[1]);
      board[7][i] = new ChessPiece(namePiece[i], colorPiece[1]);
    }

    return board;
  }

  getBoard() {
    return this.board;
  }

  movePiece(from, to) {
    const piece = this.board[from.row][from.column];
    this.board[from.row][from.column] = null;
    this.board[to.row][to.column] = piece;
  }

  isPieceAtPosition(position) {
    return this.board[position.row][position.column] !== null;
  }

  getPieceAtPosition(position) {
    return this.board[position.row][position.column];
  }

  getPieceNameAtPosition(position) {
    return this.board[position.row][position.column].name;
  }

  getPieceColorAtPosition(position) {
    return this.board[position.row][position.column].color;
  }
}

module.exports = ChessBoard;
