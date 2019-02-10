import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = ( { label, important = false } ) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (

    <span className="to-do-list-item">
      <span
        className="to-do-list-item-label"
        style={style}>
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

export default ToDoListItem;
