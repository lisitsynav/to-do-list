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
    done: false,
    important: false
  };
  //constructor() {
  //  super();
  //  this.onLabelClick = () => {
  //    console.log(`Task "${this.props.label}" completed!`);
  //  };
  //};
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onImportantMark = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "to-do-list-item";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important"
    }
    return (
      <span className={classNames}>

        <span
          className="to-do-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ this.onImportantMark }>
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
