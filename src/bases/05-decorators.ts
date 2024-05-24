class NewPokemon {
    constructor(public readonly id:number, public name: string) {}

    scream() {
        console.log(`NO QUIERO GRITAR!!`);
    }

    speak(){
        console.log(`NO QUIERO HABLAR`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        console.log('target', target)

        return NewPokemon;
    } 
}

@MyDecorator()
class Pokemon {
    constructor(public readonly id:number, public name: string) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();
