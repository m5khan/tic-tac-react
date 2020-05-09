import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    container: {
        flexGrow: 1,
        // backgroundColor: 'orange',
        height: '85vh',
        alignItems: 'center'
    },
    box: {
        // backgroundColor: 'red',
        width: '100%',
        height: '100%',
    }
}));

import Header from './Header';
import TicTacToe from './tac-toe';

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Container className={classes.container} maxWidth="md">
                <Box 
                    className={classes.box} 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <TicTacToe />
                </Box>
            </Container>
        </>
        )
    }
    
    export default App;