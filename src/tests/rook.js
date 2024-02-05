import React from 'react';
import {render, screen} from '@testing-library/react';
import { Chessboard } from 'react-chessboard';

test('render chessboard', ()=>{
    render(<Chessboard id="basicBoard"/>);
    expect(screen.getByTestId('basicBoard')).toBeInTheDocument();
})