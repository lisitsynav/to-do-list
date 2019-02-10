import React from 'react';

const ToDoListItem = ( { label, important = false } ) => {
  const style = {
    color: important ? '#FF0000' : '#000000'
  }
  return (
    <span style={style}>{ label }</span>
  );
};

export default ToDoListItem;
