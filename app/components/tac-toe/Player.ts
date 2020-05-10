import { Sign } from '../tac-toe';

//type ISign = Record<Sign, string>
type ISign = Sign

class Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    matches: number;
    sign: ISign;

    constructor(id: number, sign: ISign, name?:string) {
        this.id = id;
        this.name = name ? name : id.toString();
        this.wins = 0;
        this.losses = 0;
        this.matches = 0;
        this.sign = sign;
    }

}

export default Player;