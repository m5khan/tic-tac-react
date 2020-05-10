import React, { useReducer, useState } from 'react';
import GamePanel from './GamePanel';
import Board from './Board';
import Player from './Player';

enum Sign {
    nix,
    x,
    o
}

interface GameState {
    players: Player[],
    turn: number,
    finish: boolean
}

interface Action {
    type: string,
    payload: any
}

type Board = Sign[][];

/**
 * Initial game state
 */
const initialGameState: GameState = {
    players: [
        new Player(1, Sign.x),
        new Player(2, Sign.o)
    ],
    turn: 0,
    finish: false
}

/**
 * Reducer for game state
 */
function gameReducer (gameState: GameState, action: Action) {
    switch (action.type) {
        case 'changePlayer':
            const pturn = (gameState.turn + 1) % gameState.players.length;
            return {...gameState, turn: pturn};
        default:
            throw new Error();
    }
}

const TicTacToe: React.FC = () => {
    const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
    // default board matrix
    const [ board, setBoard ] = useState<Board>([
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
            [Sign.nix, Sign.nix, Sign.nix, Sign.nix, Sign.nix],
        ]);

    const addRow = (): void => {
        const newRow: Sign[] = board[0].map(_e => Sign.nix);
        setBoard((prevState: Board) => {
            return [...prevState, newRow];
        });
    }

    const addCol = (): void => {
        setBoard((prevState: Board) => {
            const board = prevState.map((row: Sign[]) => {
                row.push(Sign.nix);
                return row;
            });
            return board;
        });
    }

    const getCurrentPlayer = ():Player => {
        return gameState.players[gameState.turn];
    }

    const changePlayer = (): void => {
        
        dispatch({
            type: 'changePlayer',
            payload: ''
        });
    }

    const onCellClick = (cell: number[]) => {
        if(board[cell[0]][cell[1]] !== Sign.nix) {
            return;
        }
        const newBoard = reconstructBoard(cell);
        setBoard(newBoard);
        changePlayer();
    }

    /**
     * Reconstruct board datasctucture as a new object, not mutated
     */
    const reconstructBoard = (cell: number[]): Board => {
        return board.map((e, i) => {
            if (i === cell[0]) {
                const newRow = e.map((c, j) => {
                    if(j === cell[1]) {
                        return getCurrentPlayer().sign;
                    } else {
                        return c;
                    }
                });
                return newRow
            } else {
                return e;
            }
        })
    }


    return (
        <GamePanel addRow={addRow} addCol={addCol} player={getCurrentPlayer()}>
            <Board matrix={board} onCellClick={onCellClick}/>
        </GamePanel>
    )
}

export default TicTacToe;
export {
    Sign,
    Board
};