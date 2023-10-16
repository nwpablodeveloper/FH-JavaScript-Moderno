/**
 * 
 * @param {HTMLDivElement} element 
 */

export const callbacksComponent02 = ( element ) => {
    


    let parrilla = '💨💨💨💨💨';
        
    element.innerHTML = parrilla;
    
    const prepararCarbon = ( callback ) => {
        parrilla = '💨💨💨💨💨';
        
        element.innerHTML = parrilla;
        
        setTimeout( () => {
            prenderCarbon( callback )
        }, 1000 )
    }

    const prenderCarbon = ( callback ) => {
        parrilla = parrilla + '<br>🔥🔥🔥🔥🔥🔥🔥';
        element.innerHTML = parrilla;
        setTimeout( callback, 2000);
    }

    const cocinarCarne = () => {
        parrilla = parrilla + '<br>Tsssss 🥩🥩🥩'
        element.innerHTML = parrilla;
    }

    setTimeout(() => {
        console.log(parrilla)
        element.innerHTML = parrilla;
        prepararCarbon( cocinarCarne )
    }, 500);

}


