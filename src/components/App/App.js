import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import ItemStatusFilter from '../ItemStatusFilter';
import TaskAddForm from '../TaskAddForm';
import './App.css';

export default class extends Component {
  maxId = 100;

  state = {
    toDoData: [
      this.createToDoTask('Learn React'),
      this.createToDoTask('Create React App'),
      this.createToDoTask('Pet the cat'),
      this.createToDoTask('Touch the cat\'s nose'),
      this.createToDoTask('Have some tea')
    ]
  };

  createToDoTask(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
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
  onTaskAdded = (text) => {
    const newTask = this.createToDoTask(text);

    // Add element in array
    this.setState(({ toDoData }) => {
      const newArr = [
        ...toDoData, newTask
      ];
      return {
        toDoData: newArr
      };
    });
  };

  onToggleImportant = (id) => {

  };

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      // Update object
      const oldTask = toDoData[idx];
      const newTask = {...oldTask, done: !oldTask.done};
      // Construct new Array
      const newArray = [
        ...toDoData.slice(0, idx), newTask, ...toDoData.slice(idx + 1)
      ];

      return {
        toDoData: newArray
      };
    });
  };

  render() {

    const doneCount = this.state.toDoData.filter((el) => el.done).length;
    const toDoCount = this.state.toDoData.length - doneCount;

    return(
      <div className="to-do-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todo={ this.state.toDoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }/>
        <TaskAddForm onTaskAdded={ this.onTaskAdded }/>
      </div>
    );
  };
};
