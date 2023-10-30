import modalHtml from './render-modal.html?raw'
import './render-modal.css'
import { saveUser } from '../../use-cases/save-user';
import { User } from '../../models/users';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form;
let loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 * @returns 
 */
export const showModal = async ( id ) => {

    modal?.classList.remove('hide-modal')
    loadedUser = {};

    if( !id ) return ;
    const user = await getUserById( id );
    setFormValue( user )

}

/**
 * 
 * @param {User} user 
 */
const setFormValue = ( user ) => {

    console.log(user.firstName)
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;

}

export const hideModal = (  ) => {

    modal?.classList.add('hide-modal');

    form?.reset();

}

/**
 * 
 * @param {HTMLDialogElement} element 
 * @param {(userLike)=> Promise<void>} callback
 */
export const RenderModal = ( element, callback ) => {

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

    form.addEventListener('submit', async ( event ) => {
        
        // Evita el clasico envio de formulario que refresca la web 
        event.preventDefault();  // prevenir el comportamiento por defecto

        const formData = new FormData( form );

        // for( const data of formData ) {
        //     console.log(data)
        // }

        const userLike = { ...loadedUser };

        for( const [ key, value ] of formData ) {
            if( key === 'balance') {
                userLike[key] = +value;
                continue;
            }

            if( key === 'isActive' ) {
                userLike[key] = ( value === 'on' ) ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        await callback( userLike );
        hideModal();

    })

    element.append( modal );

}