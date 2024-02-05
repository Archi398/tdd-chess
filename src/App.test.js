import { render, screen } from '@testing-library/react';
import App from './App';


test('render chessboard', ()=>{
    render(<App />);
    expect(screen.getByTestId('myChessboard')).toBeInTheDocument();
});


