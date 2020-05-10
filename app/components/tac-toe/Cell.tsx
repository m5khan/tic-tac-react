import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Sign } from '../tac-toe';

const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        width: '40px',
        height: '40px',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
}));



type Props = {
    sign: Sign;
    cellIndex: number[];
    onCellClick: (cellIndex: number[]) => void
}

const Cell: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    const signIcon = (sign: Sign) => {
        if(sign === Sign.x) {
            return <ClearIcon />
        } else if (sign === Sign.o) {
            return <RadioButtonUncheckedIcon />
        } else {
            return '';
        }
    }

    return (
        <Paper onClick={() => {props.onCellClick(props.cellIndex)}} className={classes.paper} variant="outlined" square>
            {
                signIcon(props.sign)
            }
        </Paper>
    )
}

export default Cell;