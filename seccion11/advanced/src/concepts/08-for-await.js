import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371fd55e2e2a30fe1ccb';

    if ( await getHeroAsync( id ) ) {
        element.innerHTML = 'Si existe'
    }

    const herosIds = heroes.map( heroeo => heroeo.id );
    
    const herosPromises = getHeroesAsync( herosIds );
    
    for await( const hero of herosPromises ) {
        element.innerHTML += `${ hero.name }<br/>`
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */

const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 100)
    });

    return heroes.find( hero => hero.id === id );
}