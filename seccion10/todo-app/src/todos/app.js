import html from './app.html?raw'
import todoStore from '../store/todo.store'
import { renderTodo } from './usecases/render-todo';

/**
 * 
 * @param {HTMLElement} elementeId 
 */

const ElementIds = {
    todoList: '.todo-list'
}


export const App = ( elementeId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodo( ElementIds.todoList, todos );
    }

    ( () => {

        const app = document.createElement('div');
        app.innerHTML = html

        document.querySelector( elementeId ).append( app )

        displayTodos();
        

    }) ();


}