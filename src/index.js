import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import './index.css';

const App = () => {
  const toDoData = [
    { label: 'Learn React', important: true, id: 0 },
    { label: 'Create React App', important: true, id: 1 },
    { label: 'Pet the cat', important: false, id: 2 },
    { label: 'Touch the cat\'s nose', important: false, id: 3 },
    { label: 'Have some tea', important: false, id: 4 }
  ];

  return (
    <div className="to-do-app">
      <AppHeader toDo={3} done={2} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todo={toDoData}/>
    </div>
  );
};


ReactDOM.render(<App />,
  document.getElementById('root'));
