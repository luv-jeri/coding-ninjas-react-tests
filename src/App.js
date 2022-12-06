import React from 'react';
import './styles.css';
import TodoItem from './TodoItem.js';
import todoData from './todoData.js';

class App extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        <h1>My Daily Goals</h1>
        {todoData.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
      </div>
    );
  }
}

export default App;
