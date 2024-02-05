const ChessBoard = require("./chessboard");

describe("ChessBoard", () => {
  let chessBoard;

  beforeEach(() => {
    chessBoard = new ChessBoard();
  });

  it("initializes the board with 8 rows", () => {
    // GIVEN
    // WHEN
    const board = chessBoard.initializeBoard();
    // THEN
    expect(board).toHaveLength(8);
  });

  it("initializes each row with 8 columns", () => {
    // GIVEN
    // WHEN
    const board = chessBoard.initializeBoard();
    board.forEach((row) => {
      // THEN
      expect(row).toHaveLength(8);
    });
  });

  it("places the correct pieces in the first row", () => {
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

  it("places the correct pieces in the second row (Black pawns)", () => {
    // GIVEN
    const expectedSecondRow = Array(8).fill({ name: "Pawn", color: "Black" });
    // WHEN
    const board = chessBoard.initializeBoard();
    // THEN
    expect(board[1]).toEqual(expectedSecondRow);
  });

  it("places the correct pieces in the seventh row (white pawns)", () => {
    // GIVEN
    const expectedSeventhRow = Array(8).fill({ name: "Pawn", color: "White" });

    // WHEN
    const board = chessBoard.initializeBoard();

    //THEN
    expect(board[6]).toEqual(expectedSeventhRow);
  });

  it("places the correct pieces in the eighth row", () => {
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
});
