import * as React from 'react';

const TodoHeader = () => {
    return (
        <div className='row'>
            <div className='col-6'>
                <h1> My TODO List</h1>
            </div>
            <div className='col-6 d-flex justify-content-end pt-4'>
                <span className='pe-1'> 1 more to do, 3 done</span>
            </div>
        </div>

    );
}
export default TodoHeader;