import React, { useState } from 'react'

function TodoForm({ addTodo}) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  }
  return (
    <div className='todo-form'>
      <h2>Create Task:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter title' value={value} onChange={(e) => setValue(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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