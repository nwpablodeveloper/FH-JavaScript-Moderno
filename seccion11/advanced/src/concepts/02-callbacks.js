import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponente = ( element ) => {

    const id = '5d86371f25a058e5b1c8a65e';

    findHero( id, ( hero ) => {
        element.innerHTML = hero.name
    });

}

/**
 * 
 * @param {String} id 
 * @param { ( error: String | null, hero: Object ) => vodi } callback 
 */

const findHero = ( id, callback ) => {


    const heroe = heroes.find( heroe => heroe.id === id );

    callback( heroe )

}