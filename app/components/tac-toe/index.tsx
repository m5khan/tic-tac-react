import React from 'react';

import Board from './Board';

enum Sign {
    x,
    o
}

const TicTacToe: React.FC = () => {
    return Board({name: 'shoaib'});
}

export default TicTacToe;
export {
    Sign
};