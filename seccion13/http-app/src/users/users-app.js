import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"
import { saveUser } from "./use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const UsersApp = async ( element ) => {

    element.innerText = 'LOADING...'
    
    await usersStore.loadNextPage();
    element.innerText = ''

    renderTable( element );
    renderButtons( element )
    RenderAddButton( element );
    RenderModal( element, async ( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChanged( user );
        renderTable()
    });

}