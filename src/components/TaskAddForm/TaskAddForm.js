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
    this.setState({
      label: ''
    });
  };

  render() {
    return(
      <form className="TaskAddForm d-flex" onSubmit={this.onSubmit}>
      <input type="text" className="form-control" onChange={this.onLabelChange}
             placeholder="Add a new task"  value={this.state.label}/>
        <button className="btn btn-outline-secondary">+</button>
      </form>
    )
  }
};
