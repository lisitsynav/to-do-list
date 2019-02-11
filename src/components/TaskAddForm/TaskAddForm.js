import React, { Component } from 'react';
import './TaskAddForm.css';

export default class TaskAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onTaskAdded(this.state.label);
  }

  render() {
    return(
      <form className="TaskAddForm d-flex" onSubmit={this.onSubmit}>
      <input type="text" className="form-control" onChange={this.onLabelChange}
             placeholder="Add a new task" />

        <button className="btn btn-outline-secondary"
                onClick={() => this.props.onTaskAdded('Hi')}>+</button>
      </form>
    )
  }
};
