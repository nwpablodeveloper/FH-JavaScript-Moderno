import todoStore, { Filters } from "../../store/todo.store";

let element;

export const renderPendig = ( elementId ) => {

    if( !element ) element = document.querySelector( elementId );
    if( !element ) throw new Error(`El elemento con el id ${ elementId } no existe`)

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;
}