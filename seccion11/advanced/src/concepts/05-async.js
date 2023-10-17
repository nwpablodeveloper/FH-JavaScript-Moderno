import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb';

    findHero( id1 )
        .then( ( name ) => element.innerHTML = name) 
        .catch( error => element.innerHTML = error )


}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async ( id ) => {

    const heroe = heroes.find(heroe => heroe.id === id)
    
    if( !heroe )
        throw `Heroe with id ${ id } not found`

    return heroe.name;

}