import React from 'react'

function getCategoryColor(category) {
  switch (category) {
      case 'Job':
          return '#404a86';
      case 'Personal':
          return '#3949ab';
      case 'Study':
          return '#606dbb';
      default:
          return '#383838';
  }
}

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
            <p className='title'>{todo.title}</p>
            <p className='description'>{todo.description}</p>
            <p className='category' style={{ backgroundColor: getCategoryColor(todo.category)}}>{todo.category}</p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}>Completed</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo