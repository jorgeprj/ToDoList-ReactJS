import { useState } from 'react'

import { Todo } from './components/Todo'

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
					<Todo todo={todo} />
				))}
			</div>
		</div>
	)
}

export default App