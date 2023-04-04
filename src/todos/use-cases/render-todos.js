import todoStore from '../../store/todo.store';
import { Todo } from '../models/todo.models'
import { createTodoHTML } from './create-todo-html';


let element;

/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if ( !element )
        element = document.querySelector( elementId )

    if ( !element ) throw new Error(`Element ${ elementId } is required`)    
    
    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML( todo ))
    });

}