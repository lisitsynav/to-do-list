import React, { Component } from 'react';
import './ToDoListItem.css'

export default class ToDoListItem extends Component {
  //constructor() {
  //  super();
  //  this.state = {
  //    done: false
  //  };
  //};
  state = {
    done: false
  };
  //constructor() {
  //  super();
  //  this.onLabelClick = () => {
  //    console.log(`Task "${this.props.label}" completed!`);
  //  };
  //};
  onLabelClick = () => {
    this.setState({
      done: true
    });
  };
  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let classNames = "to-do-list-item";
    if (done) {
      classNames += " done";
    }
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className={classNames}>
        <span
          className="to-do-list-item-label"
          style={style}
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
};
