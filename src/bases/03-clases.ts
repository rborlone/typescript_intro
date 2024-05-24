import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    // public id:number = 1;
    // public name: string = 'no name';

    // constructor(id:number, name:string) {
    //     this.id = id;
    //     this.name = name;
    //     console.log('Constructor llamado');
    // }

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id}.jpg`;
    }

    constructor (
        public readonly id: number,
        public name: string
    ){
        console.log("sigue funcionando igual")
    }

    scream(){
        console.log(`${this.name.toUpperCase() }!!!`)
    }

    speak(){
        console.log(`${this.name }, ${this.name}`)
    }

    async getMoves():Promise<Move[]>{
        const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log('moves', data.moves[0].move.name )

        return data.moves;
    }


}

export const charmander = new Pokemon(4, 'Charmander' );

console.log(charmander.getMoves())
