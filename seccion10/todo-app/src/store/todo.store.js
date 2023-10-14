import { Todo } from "../todos/models/todo.model";
// import { renderTodo } from "../todos/usecases/render-todo";

export const Filters = {
    All: 'all',
    Complete: 'Completed',
    Pending: 'Pending'
}

const state = {

    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del Espacio'),
        new Todo('Piedra del Tiempo'),
        new Todo('Piedra del Poder'),
        new Todo('Piedra del Realidad'),
    ],

    filter: Filters.All

}

const initSotre = () => {
    loadStore();
}

const loadStore = () => {

    
    if( !localStorage.getItem('state') ) return;
    
    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem( 'state' ) );

    state.todos = todos;
    state.filter = filter;
    
}

const saveStateToLocalStorage = () => {

    localStorage.setItem( 'state', JSON.stringify(state) )

}

const getTodos = ( filter = Filters.All ) => {
    
    switch ( filter ) {
        case Filters.All:
            return [ ...state.todos ];
        
        case Filters.Complete:
            return state.todos.filter( todo => todo.done  )
        
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done  )
    
        default:
            throw new Error(`${ filter } no permitido`)
            break;
    }

}

const addTodo = ( descripcion ) => {

    if( !descripcion ) throw new Error('La descripción es requerida');

    state.todos.push( new Todo( descripcion ) );
    
    saveStateToLocalStorage();

}

const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done
        }
        return todo;
    });

    saveStateToLocalStorage();

}

const deleteCompleted = ( todoId ) => {

    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateToLocalStorage();

}

const deleteTodo = ( ) => {
    state.todos = state.todos.filter( todo => !todo.done  );
    saveStateToLocalStorage();
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initSotre,
    loadStore,
    setFilter,
    toggleTodo,
}
