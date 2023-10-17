/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        slowPromise(),
        fastPromise(),
        slowPromise(),
        fastPromise(),
        mediumPromise(),
        mediumPromise(),
    ])
    .then( renderValue )

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve( 'Slow Promises' )
    }, 2000);
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve( 'Medium Promises' )
    }, 1500);
})

const fastPromise = () => new Promise( resolve =>  {
    setTimeout(() => {
        resolve( 'Fast promise' )
    }, 1000);
})