const ChessBoard = require("./chessboard");

describe("ChessBoard", () => {
  let chessBoard;

  beforeEach(() => {
    chessBoard = new ChessBoard();
  });

  describe("Game Board", () => {
    it("should initializes the board with 8 rows", () => {
      // GIVEN
      // WHEN
      const board = chessBoard.initializeBoard();
      // THEN
      expect(board).toHaveLength(8);
    });

    it("should initializes each row with 8 columns", () => {
      // GIVEN
      // WHEN
      const board = chessBoard.initializeBoard();
      board.forEach((row) => {
        // THEN
        expect(row).toHaveLength(8);
      });
    });

    it("should places the correct pieces in the first row", () => {
      // GIVEN
      const expectedFirstRow = [
        { name: "Rook", color: "Black" },
        { name: "Knight", color: "Black" },
        { name: "Bishop", color: "Black" },
        { name: "Queen", color: "Black" },
        { name: "King", color: "Black" },
        { name: "Bishop", color: "Black" },
        { name: "Knight", color: "Black" },
        { name: "Rook", color: "Black" },
      ];
      // WHEN
      const board = chessBoard.initializeBoard();
      // THEN
      expect(board[0]).toEqual(expectedFirstRow);
    });

    it("should places the correct pieces in the second row", () => {
      // GIVEN
      const expectedSecondRow = Array(8).fill({ name: "Pawn", color: "Black" });
      // WHEN
      const board = chessBoard.initializeBoard();
      // THEN
      expect(board[1]).toEqual(expectedSecondRow);
    });

    it("should places the correct pieces in the seventh row", () => {
      // GIVEN
      const expectedSeventhRow = Array(8).fill({
        name: "Pawn",
        color: "White",
      });

      // WHEN
      const board = chessBoard.initializeBoard();

      //THEN
      expect(board[6]).toEqual(expectedSeventhRow);
    });

    it("should places the correct pieces in the eighth row", () => {
      // GIVEN
      const expectedEighthRow = [
        { name: "Rook", color: "White" },
        { name: "Knight", color: "White" },
        { name: "Bishop", color: "White" },
        { name: "Queen", color: "White" },
        { name: "King", color: "White" },
        { name: "Bishop", color: "White" },
        { name: "Knight", color: "White" },
        { name: "Rook", color: "White" },
      ];
      // WHEN
      const board = chessBoard.initializeBoard();

      // THEN
      expect(board[7]).toEqual(expectedEighthRow);
    });

    it("should get the board", () => {
      // GIVEN
      const expectedBoard = chessBoard.initializeBoard();
      // WHEN
      const board = chessBoard.getBoard();
      // THEN
      expect(board).toEqual(expectedBoard);
    });
  });

  describe("Movement of pieces", () => {
    it("should move a piece from one position to another", () => {
      // GIVEN
      const from = { row: 1, column: 1 };
      const to = { row: 2, column: 1 };
      const expectedPiece = chessBoard.board[from.row][from.column];

      // WHEN
      chessBoard.movePiece(from, to);

      // THEN
      expect(chessBoard.board[to.row][to.column]).toEqual(expectedPiece);
    });

    it("should check if a piece is at a position", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      // WHEN
      const isPieceAtPosition = chessBoard.isPieceAtPosition(position);
      // THEN
      expect(isPieceAtPosition).toBe(true);
    });

    it("should check if a piece is not at a position", () => {
      // GIVEN
      const positionWithoutPiece = { row: 3, column: 3 };
      // WHEN
      const isPieceAtPosition =
        chessBoard.isPieceAtPosition(positionWithoutPiece);
      // THEN
      expect(isPieceAtPosition).toBe(false);
    });

    it("should get the piece at a position", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      // WHEN
      const piece = chessBoard.getPieceAtPosition(position);
      // THEN
      expect(piece).toEqual(chessBoard.board[position.row][position.column]);
    });

    it("should return null for position without a piece", () => {
      // GIVEN
      const positionWithoutPiece = { row: 3, column: 3 };
      // WHEN
      const piece = chessBoard.getPieceAtPosition(positionWithoutPiece);
      // THEN
      expect(piece).toBeNull();
    });

    it("should get the name of the piece at a position", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      // WHEN
      const pieceName = chessBoard.getPieceNameAtPosition(position);
      // THEN
      expect(pieceName).toBe("Pawn");
    });

    it("should get the color of the piece at a position", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      // WHEN
      const pieceColor = chessBoard.getPieceColorAtPosition(position);
      // THEN
      expect(pieceColor).toBe("Black");
    });
  });

  describe("Movement of King", () => {});
});
