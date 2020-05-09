import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(() => ({
    icon: {
        cursor: 'pointer'
    }
}));

type Props = {
    addRow: () => void,
    addCol: () => void,
    children?: (string | JSX.Element )[] | JSX.Element;
} 

const GamePanel: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
        <Grid container direction="column">
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item></Grid>
                <Grid item>
                    {props.children}
                </Grid>
                <Grid item>
                    <AddCircleOutlineIcon onClick={props.addCol} className={classes.icon} fontSize="large" color="disabled" />
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{height: '50px'}}>
                <Grid item>
                    <AddCircleOutlineIcon onClick={props.addRow} style={{marginLeft: '-35px'}} className={classes.icon} fontSize="large" color="disabled"/>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default GamePanel;