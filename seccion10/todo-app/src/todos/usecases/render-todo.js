import { crearTodoHTML } from "./create-todo-html";


export const renderTodo = ( elementoId, todos = [] ) => {


    const element = document.querySelector( elementoId );
    
    todos.forEach( todo =>  {
        element.append( crearTodoHTML( todo ) )
    })
    
}