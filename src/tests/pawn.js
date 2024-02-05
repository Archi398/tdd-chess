export function isValidMovePawn(sourceSquare, targetSquare, piece) {
  console.log('isValidMovePawn', sourceSquare, targetSquare, piece);

  const [sourceFile, sourceRank] = sourceSquare;
  const [targetFile, targetRank] = targetSquare;
  const [color, pieceType] = piece;
  const rankDifference = Math.abs(targetRank - sourceRank);

  if (targetFile === sourceFile) {
    if (rankDifference === 1) {
      return true;
    } else if (rankDifference === 2 && sourceRank === (color === 'w' ? '2' : '7')) {
      return true;
    }
  } else if (Math.abs(targetFile.charCodeAt(0) - sourceFile.charCodeAt(0)) === 1) {
    if (rankDifference === 1) {
      return true;
    }
  }

  return false;
}