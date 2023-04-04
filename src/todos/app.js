import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { Todo } from './models/todo.models';
import { renderTodos } from './use-cases';


const ElementsIDs = {
    TodoList: '.todo-list',
    NewTodoImput: '.new-todo',

}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = (  ) => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementsIDs.TodoList, todos);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app )
        displayTodos();

    })();

    const newDescriptionInput = document.querySelector( ElementsIDs.NewTodoImput );

    newDescriptionInput.addEventListener('keyup', ( event ) => {
        console.log(event)
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });
}