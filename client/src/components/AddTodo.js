import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ gettodos }) => {
	const [todo, setAddTodo] = useState('');

	// add todo to database
	const addTodo = async newTodo => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			await axios.post('/todos', newTodo, config);
			// set state and value to be empty
			setAddTodo('');
			// get all todos again
			gettodos();
		} catch (err) {
			console.error(err.message);
		}
	};

	// handle form submit
	const onSubmit = e => {
		e.preventDefault();

		const newTodo = {
			text: todo
		};

		addTodo(newTodo);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Add Todo'
					onChange={e => setAddTodo(e.target.value)}
					value={todo}
				/>
			</form>
		</div>
	);
};

export default AddTodo;
