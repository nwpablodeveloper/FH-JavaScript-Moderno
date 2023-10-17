import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    try {
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;

    } catch (error) {
        element.innerHTML = error;
    }



}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async ( id ) => {
    

    const heroe = heroes.find(heroe => heroe.id === id)
    
    if( !heroe )
        throw `Heroe with id ${ id } not found`

    return heroe;

}