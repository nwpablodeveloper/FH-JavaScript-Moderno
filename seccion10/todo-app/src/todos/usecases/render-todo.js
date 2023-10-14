import { crearTodoHTML } from "./create-todo-html";


let element;

export const renderTodo = ( elementoId, todos = [] ) => {

    if( !element )  element = document.querySelector( elementoId ) 
    if( !element )  throw new Error('No se encontro el elemento en el DOM')
    
    element.innerHTML ='';
    
    todos.forEach( todo =>  {
        element.append( crearTodoHTML( todo ) )
    })
    
}