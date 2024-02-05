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
      console.log(pieceColor);
      // THEN
      expect(pieceColor).toBe("Black");
    });
  });

  describe("Color of pieces", () => {
    it("should check if two pieces have the same color", () => {
      // GIVEN
      const position1 = { row: 1, column: 1 };
      const position2 = { row: 1, column: 2 };
      // WHEN
      const isSameColor = chessBoard.isSameColor(position1, position2);
      // THEN
      expect(isSameColor).toBe(true);
    });

    it("should check if two pieces have different colors", () => {
      // GIVEN
      const position1 = { row: 1, column: 1 };
      const position2 = { row: 6, column: 1 };
      // WHEN
      const isDifferentColor = chessBoard.isDifferentColor(
        position1,
        position2
      );
      // THEN
      expect(isDifferentColor).toBe(true);
    });

    it("should check if a position is occupied by an opponent", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      const color = "White";
      // WHEN
      const isOccupiedByOpponent = chessBoard.isOccupiedByOpponent(
        position,
        color
      );
      // THEN
      expect(isOccupiedByOpponent).toBe(true);
    });

    it("should check if a position is not occupied by an opponent", () => {
      // GIVEN
      const position = { row: 1, column: 1 };
      const color = "Black";
      // WHEN
      const isOccupiedByOpponent = chessBoard.isOccupiedByOpponent(
        position,
        color
      );
      // THEN
      expect(isOccupiedByOpponent).toBe(false);
    });
  });

  describe("Movement of King", () => {
    it("should move the King to a valid position", () => {
      // GIVEN
      const from = { row: 0, column: 4 };
      const to = { row: 1, column: 4 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the King to an invalid position", () => {
      // GIVEN
      const from = { row: 0, column: 4 };
      const to = { row: 2, column: 4 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
  describe("Movement of Queen", () => {
    it("should move the Queen to a valid position", () => {
      // GIVEN
      const from = { row: 0, column: 3 };
      const to = { row: 3, column: 3 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the Queen to an invalid position", () => {
      // GIVEN
      const from = { row: 0, column: 3 };
      const to = { row: 3, column: 4 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
  describe("Movement of Rook", () => {
    it("should move the Rook to a valid position", () => {
      // GIVEN
      const from = { row: 0, column: 0 };
      const to = { row: 3, column: 0 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the Rook to an invalid position", () => {
      // GIVEN
      const from = { row: 0, column: 0 };
      const to = { row: 3, column: 3 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
  describe("Movement of Bishop", () => {
    it("should move the Bishop to a valid position", () => {
      // GIVEN
      const from = { row: 0, column: 2 };
      const to = { row: 2, column: 0 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the Bishop to an invalid position", () => {
      // GIVEN
      const from = { row: 0, column: 2 };
      const to = { row: 3, column: 3 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
  describe("Movement of Knight", () => {
    it("should move the Knight to a valid position", () => {
      // GIVEN
      const from = { row: 0, column: 1 };
      const to = { row: 2, column: 0 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the Knight to an invalid position", () => {
      // GIVEN
      const from = { row: 0, column: 1 };
      const to = { row: 3, column: 3 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
  describe("Movement of Pawn", () => {
    it("should move the Pawn to a valid position", () => {
      // GIVEN
      const from = { row: 1, column: 1 };
      const to = { row: 3, column: 1 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(true);
    });

    it("should not move the Pawn to an invalid position", () => {
      // GIVEN
      const from = { row: 1, column: 1 };
      const to = { row: 3, column: 3 };
      // WHEN
      const isValidMove = chessBoard.isValidMove(from, to);
      // THEN
      expect(isValidMove).toBe(false);
    });
  });
});
