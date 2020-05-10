import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Player from './Player';

const useStyles = makeStyles(() => ({
    icon: {
        cursor: 'pointer'
    }
}));

type Props = {
    addRow: () => void,
    addCol: () => void,
    player: Player,
    children?: (string | JSX.Element )[] | JSX.Element;
} 

const GamePanel: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
        <Grid container direction="column">
            {/* Fisrt Row */}
            <Grid container justify="center" style={{height: '50px'}}>
                <Grid item>
                    <Typography style={{marginLeft: '-35px'}} variant="body2" color="primary" component="p">
                        current player : {props.player.name}
                    </Typography>
                </Grid>
            </Grid>
            {/* Second row contains game board */}
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item></Grid>
                <Grid item>
                    {props.children}
                </Grid>
                <Grid item>
                    <AddCircleOutlineIcon onClick={props.addCol} className={classes.icon} fontSize="large" color="disabled" />
                </Grid>
            </Grid>
            {/* bottom row */}
            <Grid container justify="center" alignItems="flex-end" style={{height: '50px'}}>
                <Grid item>
                    <AddCircleOutlineIcon onClick={props.addRow} style={{marginLeft: '-35px'}} className={classes.icon} fontSize="large" color="disabled"/>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default GamePanel;