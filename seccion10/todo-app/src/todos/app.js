import html from './app.html?raw'
import todoStore, { Filters } from '../store/todo.store'
import { renderPendig, renderTodo } from './usecases';

/**
 * 
 * @param {HTMLElement} elementeId 
 */

const ElementIds = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    destroy: '.destroy',
    clearComplete: '.clear-completed',
    todoFilters: '.filtro',
    pendigCount: '#pending-count'
}


export const App = ( elementeId ) => {

    const displayTodos = ( filtro = Filters.All ) => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodo( ElementIds.todoList, todos );
        updatePendigCount();
    }

    const updatePendigCount = () => {
        renderPendig( ElementIds.pendigCount )
    }

        
    ( () => {
        
        const app = document.createElement('div');
        app.innerHTML = html
        
        document.querySelector( elementeId ).append( app );
        
        
        displayTodos();
        
    }) ();
        
    // Referencias HTML

    const newDescriptionInput = document.querySelector( ElementIds.newTodoInput );
    const todoListtURL = document.querySelector( ElementIds.todoList );
    const clearCompleted = document.querySelector( ElementIds.clearComplete );
    const filtersLis = document.querySelectorAll( ElementIds.todoFilters );

    clearCompleted.addEventListener( 'click',  () => {
        todoStore.deleteTodo();
        displayTodos( );
    });
    
    
    newDescriptionInput.addEventListener( 'keyup', ( event ) => {
        
        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
        

    });

    todoListtURL.addEventListener( 'click', ( event ) => {
        const element = event.target.closest('[data-id]'); // busca el atributo mas cercano hacia el lado del padre
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
    });

    todoListtURL.addEventListener('click', (event) => {
        
        const element = event.target.closest('[data-id]'); 
        
        const isDestroyElement = event.target.className === 'destroy';

        if( !element || !isDestroyElement ) return;

        todoStore.deleteCompleted( element.getAttribute('data-id') )
        displayTodos();

    });
    
    filtersLis.forEach( element => {
        
        element.addEventListener( 'click', (element) => {
            
            filtersLis.forEach( borrarSelected => borrarSelected.classList.remove('selected') );
            
            element.target.classList.add('selected')
            
            switch ( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Complete )
                    break;
            }

            displayTodos();

        });
        
    });


}