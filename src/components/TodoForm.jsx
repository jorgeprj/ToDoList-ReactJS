import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !category) return;
    addTodo(title, category, description);
    setValue("");
    setCategory("");
    setDescription("");
  }
  return (
    <div className='todo-form'>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Enter title' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="task-input"
        />
        <input 
          type="text" 
          placeholder='Type a description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="task-input"
        />
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="task-input"
        >
          <option value="">Select a category</option>
          <option value="Job">Job</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
        </select>
        <button className='create-task' type='submit'>Create task</button>
      </form>
    </div>
  )
}

export default TodoForm