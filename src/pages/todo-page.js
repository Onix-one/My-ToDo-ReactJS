import * as React from 'react';
import TodoHeader from '../components/test-components/todo-heade';
import TodoSearchPanel from '../components/test-components/todo-search-panel';
import TodoList from '../components/test-components/todo-list';

const todoData = [
    { label: 'Drink coffe', important: false },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },

     { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false },
    { label: 'Create app', important: true },
    { label: 'Go to smoke', important: false }
]

const TodoPage = (props) => {
    return (
        <div>
            <TodoHeader></TodoHeader>
            <TodoSearchPanel></TodoSearchPanel>
            <TodoList todos={todoData}></TodoList>
        </div>
    );
}
export default TodoPage;