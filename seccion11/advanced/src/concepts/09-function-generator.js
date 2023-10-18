/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append( button );

    const contador = myFirstGeneratorFunction();

    const renderButton = () => {
        const { value } = contador.next();
        button.innerText = `Click Me ${ value }`
    }

    button.addEventListener( 'click', renderButton )
    
}

function* myFirstGeneratorFunction() {

    let count = 0;
    while( true ) {
        yield ++count;
    }

}