export let name: string = "Rodrigo";
export const edad: number = 37;
export const isValid:boolean = true;

console.log('isValid', isValid)

export const templateString = `Esto es un srting
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${ 1 + 1}`