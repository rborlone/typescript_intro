import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { name, edad } from './bases/01-types';
//import { pokemonIds, bulbasaur } from './bases/02-objects.ts';
// import { charmander } from './bases/03-clases.ts'
//import { charmander } from './bases/04-injection.ts' 
// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'
 
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Hola ${charmander.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
