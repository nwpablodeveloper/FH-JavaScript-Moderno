import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {

    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error: </h1>
            <h3>${ error }</h3>
            `;
    }

    const renderTwoHero = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1 }</h3>
            <h3>${ hero2 }</h3>
        `

    }

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';


    // EJEMPLO 1
    // findHero(id1)
    //     .then( (  hero1  ) => {
            
    //         findHero( id2 )
    //             .then( ( hero2 ) => {
    //                 renderTwoHero( hero1.name, hero2.name )
    //             })
    //             .catch( error => renderError( error ) );
    //     })

    //     .catch( error => renderError(error) );


    // FACTORIZACIÓN EJEMPLO 1
    // let hero1, hero2;
    // findHero( id1 )
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero( id2 )
    //     }).then( hero2 =>  {
    //         renderTwoHero( hero1.name, hero2.name )
    //     })
    //     .catch( error => renderError( error ) )

    // EJEMPLO 3 ( PROMISES.ALL )
    Promise.all([
        findHero( id1 ),
        findHero( id2 )
    ])
    .then( ( [ hero1, hero2] ) => renderTwoHero( hero1.name, hero2.name ) )
    .catch( renderError ) 

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    
    return new Promise( ( resolve, reject ) =>  {

        const hero = heroes.find( hero => hero.id == id );

        if( hero ) {
            resolve( hero );
            return
        }

        reject(`Hero with id ${ id } not found`)


    });


}