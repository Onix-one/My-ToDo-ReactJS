import * as React from 'react';
import TodoHeader from '../components/todo-components/todo-header';
import TodoSearchPanel from '../components/todo-components/todo-search-panel';
import TodoList from '../components/todo-components/todo-list';
import FilterButtons from '../components/todo-components/todo-buttons';

const todoData = [
    { label: 'Drink coffe', important: false, id: 1 },
    { label: 'Create app', important: true, id: 2 },
    { label: 'Go to smoke', important: false, id: 3 }
]

const TodoPage = (props) => {
    return (
        <div className='row justify-content-center'>
            <div className='col-7'>
                <TodoHeader></TodoHeader>
                <div className='row pb-2'>
                    <div className='col-8'>
                        <TodoSearchPanel></TodoSearchPanel>
                    </div>
                    <div className='col-4 ps-1 d-flex justify-content-end'>
                        <FilterButtons></FilterButtons>
                    </div>

                </div>
                <TodoList todos={todoData}></TodoList>
            </div>

        </div>
    );
}
export default TodoPage;