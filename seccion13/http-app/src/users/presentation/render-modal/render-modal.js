import modalHtml from './render-modal.html?raw'
import './render-modal.css'

let modal, form;

export const showModal = () => {

    modal?.classList.remove('hide-modal')

}

export const hideModal = () => {

    modal?.classList.add('hide-modal');

    // TODO reset del formulario

}

/**
 * 
 * @param {HTMLDialogElement} element 
 */
export const RenderModal = ( element ) => {

    if( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', ( event ) => {
        if( event.target.className === 'modal-container' ) {
            hideModal()
        }
    })

    form.addEventListener('submit', ( event ) => {
        
        // Evita el clasico envio de formulario que refresca la web 
        event.preventDefault();  // prevenir el comportamiento por defecto

        const formData = new FormData( form );

        // for( const data of formData ) {
        //     console.log(data)
        // }

        const userLike = {};

        for( const [ key, value ] of formData ) {
            if( key === 'balance') {
                userLike[key] = +value;
                continue;
            }

            userLike[key] = value;
        }

        console.log(userLike)

    })

    element.append( modal );

}