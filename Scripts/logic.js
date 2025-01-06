// Basic Chessboard Setup
const board = document.getElementById('chess-board');

// Initial board state
const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

// Unicode pieces
const pieces = {
  "P": "\u2659", "R": "\u2656", "N": "\u2658", "B": "\u2657", "Q": "\u2655", "K": "\u2654",
  "p": "\u265F", "r": "\u265C", "n": "\u265E", "b": "\u265D", "q": "\u265B", "k": "\u265A",
};

// Render the board
function renderBoard(boardState) {
  board.innerHTML = "";
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square', (row + col) % 2 === 0 ? 'light' : 'dark');
      if (boardState[row][col]) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieces[boardState[row][col]];
        square.appendChild(piece);
      }
      board.appendChild(square);
    }
  }
}

// Initialize the game
renderBoard(initialBoard);

// Basic Move Logic (Placeholder)
let selectedPiece = null;
let selectedSquare = null;

board.addEventListener('click', (e) => {
  const square = e.target.closest('.square');
  if (!square) return;

  const index = Array.from(board.children).indexOf(square);
  const row = Math.floor(index / 8);
  const col = index % 8;

  if (selectedPiece) {
    // Move piece logic
    initialBoard[row][col] = selectedPiece;
    initialBoard[selectedSquare.row][selectedSquare.col] = "";
    selectedPiece = null;
    selectedSquare = null;
    renderBoard(initialBoard);
  } else {
    // Select a piece
    selectedPiece = initialBoard[row][col];
    if (selectedPiece) {
      selectedSquare = { row, col };
    }
  }
});
