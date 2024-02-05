import { render, screen } from '@testing-library/react';
import App from './App';


test('render chessboard', ()=>{
    render(<App />);
    expect(screen.getByTestId('myChessboard')).toBeInTheDocument();
});


test('isValidMovePawn', ()=>{
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