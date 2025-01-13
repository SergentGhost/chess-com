// External JavaScript file: chess-game.js

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const chessBoard = document.getElementById('chess-board');
const gameModeText = document.getElementById('game-mode');

let currentPlayer = 'white';
let boardState = Array(8).fill(null).map(() => Array(8).fill(null));

function startGame(mode) {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    gameModeText.textContent = `Game Mode: ${mode === '1v1' ? '1v1' : '1v Bot'}`;
    initializeChessBoard();
}

function goBack() {
    gameScreen.classList.remove('active');
    startScreen.classList.add('active');
    chessBoard.innerHTML = '';
}

function initializeChessBoard() {
    chessBoard.innerHTML = '';
    const boardColors = ['light', 'dark'];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            const colorIndex = (row + col) % 2;
            cell.className = `cell ${boardColors[colorIndex]}`;
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            chessBoard.appendChild(cell);

            // Initialize pieces
            if (row === 1) {
                cell.textContent = '♟'; // Black Pawn
                boardState[row][col] = 'bp';
            } else if (row === 6) {
                cell.textContent = '♙'; // White Pawn
                boardState[row][col] = 'wp';
            } else if (row === 0 || row === 7) {
                const pieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
                cell.textContent = row === 0 ? pieces[col] : pieces[col].toLowerCase();
                boardState[row][col] = row === 0 ? 'b' + pieces[col].toLowerCase() : 'w' + pieces[col].toLowerCase();
            }
        }
    }
}

function handleCellClick(row, col) {
    const selectedPiece = boardState[row][col];
    if (selectedPiece) {
        console.log(`Selected ${selectedPiece} at (${row}, ${col})`);
    } else {
        console.log(`Empty cell at (${row}, ${col})`);
    }

    // Example move logic (to be expanded):
    if (currentPlayer === 'white' && selectedPiece && selectedPiece.startsWith('w')) {
        console.log("It's white's turn.");
        currentPlayer = 'black';
    } else if (currentPlayer === 'black' && selectedPiece && selectedPiece.startsWith('b')) {
        console.log("It's black's turn.");
        currentPlayer = 'white';
    } else {
        console.log('Invalid move.');
    }
}
