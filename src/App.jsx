import { useState } from 'react'

import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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

	const addTodo = (title, category) => {

		const newTodo = [
			...todos, 
			{
				id: todos.length + 1,
				title,
				category,
				isCompleted: false
			}
		]

		setTodos(newTodo);
	}

	const removeTodo = (id) => {
		const newTodos = [...todos]
		const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
        setTodos(filteredTodos);
	}

	const completeTodo = (id) => {
		const newTodos = [...todos]
        newTodos.map(todo => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
        setTodos(newTodos);
	}

	return (
		<div className='app'>
			<h1>To Do List</h1>
			<div className='todo-list'>
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
				))}
			</div>
			<div>
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	)
}

export default App