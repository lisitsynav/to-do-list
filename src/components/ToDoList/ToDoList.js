import React from 'react';
import ToDoListItem from '../ToDoListItem';
import './ToDoList.css'

const ToDoList = ( { todo, onDeleted }) => {

  const elements = todo.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem { ...itemProps } onDeleted={() => onDeleted(id)} />
      </li>
    );
  })

  return (
    <ul className="list-group to-do-list">
      { elements }
    </ul>
  );
};

export default ToDoList;
