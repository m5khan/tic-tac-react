import React, { useState } from 'react';
import GamePanel from './GamePanel';
import Board from './Board';

enum Sign {
    nix,
    x,
    o
}

const TicTacToe: React.FC = () => {
    // default board matrix
    const [ board, setBoard ] = useState<Sign[][]>([
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
        ]);

    const addRow = (): void => {
        const newRow: Sign[] = board[0].map(_e => Sign.nix);
        setBoard((prevState: Sign[][]) => {
            return [...prevState, newRow];
        });
    }

    const addCol = () => {
        setBoard((prevState: Sign[][]) => {
            const board = prevState.map((row: Sign[]) => {
                row.push(Sign.nix);
                return row;
            });
            return board;
        });
    }

    return (
        <GamePanel addRow={addRow} addCol={addCol}>
            <Board matrix={board}/>
        </GamePanel>
    )
}

export default TicTacToe;
export {
    Sign
};