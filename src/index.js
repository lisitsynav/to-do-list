import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';

const App = () => {
  const toDoData = [
    { label: 'Learn React', important: true },
    { label: 'Create React App', important: true },
    { label: 'Pet the cat', important: false },
    { label: 'Touch the cat\'s nose', important: false },
    { label: 'Have some tea', important: false }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todo={toDoData}/>
    </div>
  );
};


ReactDOM.render(<App />,
  document.getElementById('root'));
