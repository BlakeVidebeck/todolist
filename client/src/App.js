import { useState, useEffect } from 'react';
import axios from 'axios';

import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList';
import 'tachyons';

import './App.css';

function App() {
	// state
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line
	}, []);

	// get todos from database
	const getTodos = async () => {
		let res = await axios.get('/todos');
		setTodos(res.data);
	};

	return (
		<div>
			<h1>Todo list</h1>
			<AddTodo gettodos={getTodos} />
			<TodoList todos={todos} gettodos={getTodos} />
		</div>
	);
}

export default App;
