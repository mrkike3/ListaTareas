
// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

import './styles.css';

import {TodoList, Todo} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo) );

console.log('todos', todoList.todos);


