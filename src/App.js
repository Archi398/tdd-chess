import { Chessboard } from "react-chessboard";
import './App.css';

function App() {
  return (
    <div data-testid="myChessboard"
      style={{
        margin: '3rem auto',
        maxWidth: '70vh',
        width: '70vw'
      }}
    >
      <Chessboard id="basicBoard"/>
    </div>
  );
}

export default App;
