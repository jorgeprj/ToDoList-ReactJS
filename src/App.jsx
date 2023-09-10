import { useState } from 'react'

import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import GitHubButton from './components/GitHubButton';

function App() {
	const [todos, setTodos] = useState([
		{

			id: 1,
			title: 'New Features',
			description: 'Create new features',
			category: 'Job',
			isCompleted: false
		},
		{
			id: 2,
			title: 'Learning React Components',
			description: 'Watch React Components by Jorge Pires on YouTube',
			category: 'Study',
			isCompleted: false
		},
		{
			id: 3,
			title: 'Supermarket',
			description: 'Buy Milk, Coffee, and Water',
			category: 'Personal',
			isCompleted: false
		}
	]);

	const [search, setSearch] = useState("");

	const [filter, setFilter] = useState("All");
	const [sort, setSort] = useState("Asc");

	const addTodo = (title, category, description) => {

		const newTodo = [
			...todos, 
			{
				id: todos.length + 1,
				title,
				category,
				description,
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
		<div>
			<GitHubButton username="jorgeprj" repository="ToDoList-ReactJS" />
			<div className='app'>
				<h1>To Do List</h1>
				<Search search={search} setSearch={setSearch} />
				<Filter filter={filter} setFilter={setFilter} setSort={setSort} />
				<div className='todo-list'>
					{todos
					.filter((todo) => filter === "All" 
						? true 
						: filter === "Completed" 
						? todo.isCompleted 
						: !todo.isCompleted
					)
					.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())
					)
					.sort((a, b) => 
						sort === "Asc" 
							? a.title.localeCompare(b.title) 
							: b.title.localeCompare(a.title)
						)
					.map((todo) => (
						<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
					))}
				</div>
				<div>
					<TodoForm addTodo={addTodo} />
				</div>
			</div>
		</div>
	)
}

export default App