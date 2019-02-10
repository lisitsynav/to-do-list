import React, { Component } from 'react';
import './TaskAddForm.css';

export default class TaskAddForm extends Component {
  render() {
    return(
      <div className="TaskAddForm">
        <button className="btn btn-outline-secondary"
                onClick={() => this.props.onTaskAdded('Hi')}>Add Task</button>
      </div>
    )
  }
};
