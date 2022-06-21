import * as React from 'react';
import TodoPage from '../../pages/todo-page';
import Box from '@mui/material/Box';

const sideBarWidth = 290;

const PageBody = (props) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sideBarWidth}px)` }}}>
            <div className='container '>
                <div className='card-body page-boby'>
                    <TodoPage></TodoPage>
                </div>
            </div>
        </Box >
    );
}
export default PageBody;