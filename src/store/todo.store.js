import { Todo } from '../todos/models/todo.models'


const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos:  [
        
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log( state );
    console.log( 'Iniciando Store')

}

const loadStore = () => {
    throw new Error('Metod not implemented yet')
}

const getTodos = ( filter = Filters.All ) => {

    switch( filter ){
        case Filters.All:
            return [ ...state.todos ];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
            
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
            
        default: 
            throw new Error(`Option ${ filter } is not valid`);    


    }


}

/**
 * 
 * @param { String } description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is required');
    state.todos.push( new Todo( description ));
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId )
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done === true )
    
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
};

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter

}