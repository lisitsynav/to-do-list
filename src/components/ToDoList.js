import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ( { todo }) => {
  const elements = todo.map((item) => {
    return (
      <li key={item.id}>
        <ToDoListItem { ...item } />
      </li>
    );
  })
  return (
    <ul>
      { elements }
    </ul>
  );
};

export default ToDoList;
