import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Complete: 'Completed',
    Pending: 'Pending'
}

const state = {

    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],

    filter: Filters.All

}

const initSotre = () => {
    


}

const loadStore = () => {
   throw new Error('No implementado');
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
    state.push( new Todo( descripcion ) )
}

const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done
        }
        return todo;
    });

}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done  )
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId )
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
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
