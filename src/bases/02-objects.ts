export const pokemonIds = [1,20,30,34,66];

interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}


export const bulbasaur:Pokemon = {
    id: 1,
    name: 'bulbasaur',
};

export const charmander:Pokemon = {
    id: 4,
    name: 'charmander',
    age: 3
};

export const pokemons:Pokemon[] = [];

pokemons.push(bulbasaur, charmander)


// pokemonIds.push('aedea');

console.log('bulbasaur', bulbasaur)
console.log('pokemonIds', pokemonIds)
console.log('pokemons', pokemons)