import React from 'react';
import { Box } from '@material-ui/core';

import { Sign } from '../tac-toe';
import Cell from './Cell';

type Props = {
    matrix: Sign[][]
}

const Board: React.FC<Props> = (props: Props) => {
    return (
        <>
        <Box display="flex" flexDirection="column">
            {
                props.matrix.map((row: Sign[], index: number) => {
                    return <Rows key={index} row={row} rowIndex={index} />
                })
            }
            
        </Box>
        
        </>
    )
}


type RowProps = {
    row: Sign[],
    rowIndex: number
}
const Rows: React.FC<RowProps> = (props: RowProps) => {
    return (
        <Box display="flex" flexDirection="row">
            {
                props.row.map((value: Sign, index: number) => {
                    return <Cell key={`${props.rowIndex},${index}`} sign={value} cellIndex={[props.rowIndex, index]}/>
                })
            }
        </Box>
    )
}


export default Board;