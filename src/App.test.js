import { render, screen } from '@testing-library/react';
import App from './App';

// all this tests are on a blank board

test('render chessboard', () => {
  render(<App />);
  expect(screen.getByTestId('myChessboard')).toBeInTheDocument();
});

test('isPositionningValid', ()=>{
  const startPosition = {
    'a1': 'R', 'b1': 'N', 'c1': 'B', 'd1': 'Q', 'e1': 'K', 'f1': 'B', 'g1': 'N', 'h1': 'R',
    'a2': 'P', 'b2': 'P', 'c2': 'P', 'd2': 'P', 'e2': 'P', 'f2': 'P', 'g2': 'P', 'h2': 'P',
    'a7': 'p', 'b7': 'p', 'c7': 'p', 'd7': 'p', 'e7': 'p', 'f7': 'p', 'g7': 'p', 'h7': 'p',
    'a8': 'r', 'b8': 'n', 'c8': 'b', 'd8': 'q', 'e8': 'k', 'f8': 'b', 'g8': 'n', 'h8': 'r',
  };

  render(<App />);

  Object.entries(startPosition).forEach(([position, piece]) => {
    const square = screen.getByTestId(position);
    expect(square).toHaveTextContent(piece);
  });
});

test('isValidMovePawn', () => {
  // init c2 c4 wP
  let
    sourceSquare = 'c2',
    targetSquare = 'c4',
    piece = 'wP';

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;
  const rankDifference = Math.abs(targetRank - sourceRank);

  let result = false;

  if (targetFile === sourceFile) {
    if (rankDifference === 1) {
      result = true;
    } else if (rankDifference === 2 && sourceRank === (color === 'w' ? '2' : '7')) {
      result = true;
    }
  } else if (Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0)) === 1) {
    if (rankDifference === 1) {
      result = true;
    }
  }

  expect(result).toBe(true)
});

test('rook moves logic', () => {
  let
    sourceSquare = 'a1',
    legalMoves = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    targetSquare = 'a6',
    piece = 'R',
    result = false;

  if (!legalMoves.includes(targetSquare)) {
    result = false
  }
  else
    result = true

  expect(result).toBe(true)

});

test('isValidMoveKing', () => {
  // init d5 e4 wK
  let
    sourceSquare = 'd5',
    targetSquare = 'e4',
    piece = 'wK';

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;

  const fileDifference = Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0));
  const rankDifference = Math.abs(targetRank - sourceRank);

  let result = false;

  if (fileDifference <= 1 && rankDifference <= 1) {
    result = true;
  }

  expect(result).toBe(true)
});

test('isValidMoveBishop', () => {
  // init f1 b5 wB
  let
    sourceSquare = 'f1',
    targetSquare = 'b5',
    piece = 'wB';

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;

  const fileDifference = Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0));
  const rankDifference = Math.abs(targetRank - sourceRank);

  let result = false;

  if (fileDifference === rankDifference) {
    result = true;
  }

  expect(result).toBe(true)
});

test('isValidMoveKnight', () => {
  // init f4 d3 wN
  let
    sourceSquare = 'f4',
    targetSquare = 'd3',
    piece = 'wN';

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;

  const fileDifference = Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0));
  const rankDifference = Math.abs(targetRank - sourceRank);

  let result = false;

  if ((fileDifference === 2 && rankDifference === 1) || (fileDifference === 1 && rankDifference === 2)) {
    result = true;
  }

  expect(result).toBe(true)
});

test('isValidMoveQueen', () => {
  // init d1 d6 wQ
  let
    sourceSquare = 'd1',
    targetSquare = 'd6',
    piece = 'wQ';

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;

  const fileDifference = Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0));
  const rankDifference = Math.abs(targetRank - sourceRank);

  const isStraightMove = sourceFile === targetFile || sourceRank === targetRank;
  const isDiagonalMove = fileDifference === rankDifference;

  let result = false;

  if (isStraightMove || isDiagonalMove) {
    result = true;
  }

  expect(result).toBe(true)
});