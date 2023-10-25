import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"

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
    RenderModal( element );
    RenderAddButton( element );

}