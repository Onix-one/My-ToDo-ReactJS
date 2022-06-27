import * as React from 'react';
import TodoHeader from '../components/todo-components/todo-header';
import TodoSearchPanel from '../components/todo-components/todo-search-panel';
import TodoList from '../components/todo-components/todo-list';
import FilterButtons from '../components/todo-components/todo-buttons';
import Box from '@mui/material/Box';
import './todo-page.css'

const todoData = [
    { label: 'Drink coffe', important: false, id: 1 },
    { label: 'Create app', important: true, id: 2 },
    { label: 'Go to smoke', important: false, id: 3 },
]

const TodoPage = (props) => {

    return (
        <div>
            <div className='todo-page'>
                <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `100%` } }}>
                    <div className='row justify-content-center'>
                        <div className='col-5'>
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
                </Box >
            </div>
        </div>

    );
}
export default TodoPage;