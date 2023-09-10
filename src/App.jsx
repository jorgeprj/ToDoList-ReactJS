import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'New Features',
      category: 'Job',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Learning React Components',
      category: 'Study',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Supermarket',
      category: 'Personal',
      isCompleted: false
    }
  ]);

  return (
    <div className='app'>
      <h1>To Do List</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.title}</p>
              <p className='category'>{(todo.category)}</p>
            </div>
            <div>
              <button>Completed</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App