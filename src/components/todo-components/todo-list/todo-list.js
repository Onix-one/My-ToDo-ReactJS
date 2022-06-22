import * as React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {

    const elements = todos.map((todo) => {
        const { id, ...todoProps } = todo;
        return <li key={id} className='list-group-item'>
            <TodoListItem {...todoProps} />
        </li>
    });

    return (
        <ul className='list-group todo-list p-0'>
            {elements}
        </ul>
    );
}
export default TodoList;