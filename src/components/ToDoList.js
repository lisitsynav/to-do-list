import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
  return (
    <ul>
      <li><ToDoListItem label="Learn React" important /></li>
      <li><ToDoListItem label="Create React App" /></li>
    </ul>
  );
};

export default ToDoList;
