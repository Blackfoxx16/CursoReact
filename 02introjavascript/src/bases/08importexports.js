//Cuándo => export default Heroes
//import heroes from './data/heroes';

//Cuándo => export const owners
//import { owners } from './data/heroes'; 

//Cuándo => export { heroes, owner}
import { heroes, owners } from "../data/heroes";

const getHeroById = (id) => heroes.find(( heroe )=> heroe.id === id);

//console.log(getHeroById(2));

const getHeroeByOwner = (owner) => heroes.filter(( heroe )=> heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));

export {
    getHeroById,
    getHeroeByOwner
}