import * as React from 'react';
import TodoPage from '../../pages/todo-page';

const PageBody = (props) => {
    return (
        <div className='container'>
            <div className='card-body'>
                <TodoPage></TodoPage>
            </div>
        </div>
    );
}
export default PageBody;