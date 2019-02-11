import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import TaskStatusFilter from '../TaskStatusFilter';
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
    ],
    term: '',
    filter: 'all' // all, active, done
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    // Update object
    const oldTask = arr[idx];
    const newTask = {...oldTask, [propName]: !oldTask[propName]};
    // Construct new Array
    return [
      ...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'done')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  };

  render() {
    const { toDoData, term, filter } = this.state;

    const visibleTasks = this.filter(this.search(toDoData, term), filter);
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;

    return(
      <div className="to-do-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <TaskStatusFilter  filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <ToDoList
          todo={ visibleTasks }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }/>
        <TaskAddForm onTaskAdded={ this.onTaskAdded }/>
      </div>
    );
  };
};
