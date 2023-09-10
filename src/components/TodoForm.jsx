import React from 'react'

function TodoForm() {
  return (
    <div class-Name='todo-form'>
      <h2>Create Task:</h2>
      <form>
        <input type="text" placeholder='Enter title' />
        <select>
          <option value="">Select a category</option>
          <option value="Job">Job</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
        </select>
        <button type='submit'>Create task</button>
      </form>
    </div>
  )
}

export default TodoForm