import React from 'react';
import { Box } from '@material-ui/core';

import { Sign } from '../tac-toe';
import Cell from './Cell';

type Props = {
    name: string;
}

const Board: React.FC<Props> = (props: Props) => {
    console.log(props.name);
    return (
        <>
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
                <Cell sign={Sign.x}/>
                <Cell  sign={Sign.o}/>
                {/* <Cell />
                <Cell />
                <Cell /> */}
            </Box>
            <Box display="flex" flexDirection="row">
                {/* <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell /> */}
            </Box>
        </Box>
        
        </>
    )
}


export default Board;