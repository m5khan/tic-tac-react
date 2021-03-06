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
    finish: boolean,
    winner: null | Player
}

interface Action {
    type: string,
    payload?: any
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
    finish: false,
    winner: null
}

/**
 * Reducer for game state
 */
function gameReducer (gameState: GameState, action: Action) {
    switch (action.type) {
        case 'changePlayer':
            const pturn = (gameState.turn + 1) % gameState.players.length;
            return {...gameState, turn: pturn};
        case 'endGame':
            return {...gameState, finish: true, winner: action.payload}
        default:
            throw new Error();
    }
}

const TicTacToe: React.FC = () => {
    const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
    // default board matrix
    const [ board, setBoard ] = useState<Board>(
            Array(15).fill(Array(15).fill(Sign.nix)) 
    );

    const addRow = (): void => {
        if (gameState.finish) return;
        const newRow: Sign[] = board[0].map(_e => Sign.nix);
        setBoard((prevState: Board) => {
            return [...prevState, newRow];
        });
    }

    const addCol = (): void => {
        if (gameState.finish) return;
        setBoard((prevState: Board) => {
            const newboard = prevState.map((row: Sign[]) => {
                return [...row, Sign.nix]
            });
            return newboard;
        });
    }

    const getCurrentPlayer = ():Player => {
        return gameState.players[gameState.turn];
    }

    const changePlayer = (): void => {
        dispatch({type: 'changePlayer'});
    }

    const endGame = () => {
        dispatch({type: 'endGame', payload: getCurrentPlayer()});
    }

    const onCellClick = (cell: number[]) => {
        if(board[cell[0]][cell[1]] !== Sign.nix || gameState.finish) {
            return;
        }
        const newBoard = reconstructBoard(cell);
        setBoard(newBoard);
        const counts = evaluateBoard(newBoard, cell);
        if (counts < 5) {
            changePlayer();
        } else {
            endGame();
        }
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

    /**
     * Run evaluation on board along horizontal, vartical and diagnol rows
     */
    const evaluateBoard = (board: Board, cell: number[]): number => {
        const sign = board[cell[0]][cell[1]];
        const rowEval = (row: Sign[]): number => {
            let count = 0;
            for (let sn of row) {
                if(sn === sign) {
                    count ++;
                }
                if(count >= 5) {
                    break;
                } else if (sn !== sign){
                    count = 0;
                }
            }
            return count;
        }

        //horizontal
        const hRow = board[cell[0]];
        const hCount = rowEval(hRow);
        //vertical
        const vRow = board.map((rows: Sign[]) => rows[cell[1]]);
        const vCount = rowEval(vRow);
        // diagnol \
        const d1Row = board.map((row, index) => {
            const rowDiff = cell[0] - index;
            const diagIndex = cell[1] - rowDiff;
            return row[diagIndex] ? row[diagIndex] : Sign.nix
        });
        const d1Count = rowEval(d1Row);
        // diagnol /
        const d2Row = board.map((row, index) => {
            const rowDiff = cell[0] - index;
            const diagIndex = cell[1] + rowDiff;
            return row[diagIndex] ? row[diagIndex] : Sign.nix
        });
        const d2Count = rowEval(d2Row);
        return Math.max(hCount, vCount, d1Count, d2Count);
    }


    return (
        <GamePanel addRow={addRow} addCol={addCol} player={getCurrentPlayer()} end={gameState.finish}>
            <Board matrix={board} onCellClick={onCellClick}/>
        </GamePanel>
    )
}

export default TicTacToe;
export {
    Sign,
    Board
};