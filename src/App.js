import { Chessboard } from "react-chessboard";
import './App.css';
import { isValidMovePawn } from './tests/pawn';

const handleMovePiece = (sourceSquare, targetSquare, piece)  => {
  console.log( isValidMovePawn(sourceSquare, targetSquare, piece));
};

function App() {
  return (
    <div data-testid="myChessboard"
      style={{
        margin: '3rem auto',
        maxWidth: '70vh',
        width: '70vw'
      }}
    >
      <Chessboard 
        id="basicBoard"
        onPieceDrop={handleMovePiece}
      />
    </div>
  );
}

export default App;
