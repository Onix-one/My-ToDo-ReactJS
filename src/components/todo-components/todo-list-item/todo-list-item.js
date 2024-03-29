import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onMarkDone = () => {
        this.setState(({done})=> {
           return {done: !done}
        });
    };

    onMarkImportant = () => {
        this.setState(({important})=> {
            return {important: !important}
         });
    };

    render() {

        const { label } = this.props;
        const { done, important } = this.state;

        let className = 'todo-list-item';

        if(done){
            className += ' done';
        }
        if(important){
            className += ' important'
        }
      

        return (
            <div className='row '>
                <div className='col-9 d-flex align-align-items-end pt-1'>
                    <span className={className} onClick={this.onMarkDone} >{label}</span>
                </div>
                <div className='row col-3 pe-0 ps-4'>
                    <div className='col-6 pe-1'>
                        <button type="button" className="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                    </div>
                    <div className='col-6 ps-1'>
                        <button type="button" className="btn btn-outline-success" onClick={this.onMarkImportant}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                        </svg></button>
                    </div>
                </div>
            </div>
        );
    }

}
