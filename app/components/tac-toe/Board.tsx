import React from 'react';
import { Box } from '@material-ui/core';
import { Sign, Board } from '../tac-toe';
import Cell from './Cell';

type Props = {
    matrix: Board,
    onCellClick: (cell: number[]) => void
}
const Board: React.FC<Props> = (props: Props) => {
    return (
        <>
        <Box display="flex" flexDirection="column">
            {
                props.matrix.map((row: Sign[], index: number) => {
                    return <Rows key={index} row={row} rowIndex={index} onCellClick={props.onCellClick}/>
                })
            }
            
        </Box>
        
        </>
    )
}

type RowProps = {
    row: Sign[],
    rowIndex: number
    onCellClick: (cell: number[]) => void
}
const Rows: React.FC<RowProps> = (props: RowProps) => {
    return (
        <Box display="flex" flexDirection="row">
            {
                props.row.map((value: Sign, index: number) => {
                    return <Cell
                        key={`${props.rowIndex},${index}`}
                        sign={value}
                        cellIndex={[props.rowIndex, index]}
                        onCellClick={props.onCellClick}
                    />
                })
            }
        </Box>
    )
}


export default Board;