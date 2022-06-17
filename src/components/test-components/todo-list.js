import * as React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = ({ todos }) => {

    const elements = todos.map((todo) => (
        <li>
            <TodoListItem {...todo} />
        </li>));

    return (
        <ul className='p-4'>
            {elements}
            <li><TodoListItem label="Go to smoke" important /></li>
        </ul>
    );
}
export default TodoList;