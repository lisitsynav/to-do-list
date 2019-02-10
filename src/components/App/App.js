import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import ItemStatusFilter from '../ItemStatusFilter';
import './App.css';

export default class extends Component {
  state = {
    toDoData: [
      { label: 'Learn React', important: true, id: 0 },
      { label: 'Create React App', important: true, id: 1 },
      { label: 'Pet the cat', important: false, id: 2 },
      { label: 'Touch the cat\'s nose', important: false, id: 3 },
      { label: 'Have some tea', important: false, id: 4 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      // toDoData.splice(idx, 1);

      // [a, b, c, d, e]
      // [a, b,    d, e]

      // const before = toDoData.slice(0, idx);
      // const after = toDoData.slice(idx + 1);
      // const newArray = [...before, ...after];

      const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx + 1)];
      return {
        toDoData: newArray
      };
    });
  };

  render() {
    return(
      <div className="to-do-app">
        <AppHeader toDo={3} done={2} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todo={ this.state.toDoData } onDeleted={ this.deleteItem }/>
      </div>
    );
  };
};
