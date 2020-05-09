import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    bar: {
        backgroundColor: '#5c589c'
    }
  }));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <>
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <Typography variant="h6">Tic Tac React</Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}




export default Header;