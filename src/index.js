import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';

const App = () => {
  const toDoData = [
    { label: 'Learn React', important: true, id: 0 },
    { label: 'Create React App', important: true, id: 1 },
    { label: 'Pet the cat', important: false, id: 2 },
    { label: 'Touch the cat\'s nose', important: false, id: 3 },
    { label: 'Have some tea', important: false, id: 4 }
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
