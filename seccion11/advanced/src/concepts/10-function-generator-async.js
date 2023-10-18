import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async ( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinish = false;

    do {
        
        const { value, done } = await heroGenerator.next();
        isFinish = done;

        if ( isFinish ) break;
        
        element.innerText = value;
        

    } while ( !isFinish  );
}

async function* getHeroGenerator() {

    for ( const hero of heroes ){
        await sleep();
        yield hero.name;
    }
    return 'Ya no hay mas datos'

}


const sleep = () => {

    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {
            resolve()
        }, 100);

    });


}