import React from 'react';
import './AppHeader.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>To-Do List</h1>
      <h2><span>{toDo} more to do</span>, {done} done</h2>
    </div>
  );
};

export default AppHeader;
