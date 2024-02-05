import { Chessboard } from "react-chessboard";
import './App.css';

function App() {
  return (
    <div
      style={{
        margin: '3rem auto',
        maxWidth: '70vh',
        width: '70vw'
      }}
    >
      <Chessboard id="BasicBoard" />
    </div>
  );
}

export default App;
