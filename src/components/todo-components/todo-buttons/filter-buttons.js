import React, {Component}from 'react';

export default class FilterButtons extends Component{

    render(){
      
      return (
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">All</button>
          <button type="button" className="btn btn-secondary">Active</button>
          <button type="button" className="btn btn-secondary">Done</button>
        </div>
    );
    }
}

