import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTodo = () => {
	const [todo, setTodo] = useState('');
	const { addTodo } = useContext(GlobalContext);

	// handle form submit
	const onSubmit = e => {
		e.preventDefault();

		const newTodo = {
			text: todo
		};

		addTodo(newTodo);
		// set state to be empty
		setTodo('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Add Todo'
					onChange={e => setTodo(e.target.value)}
					value={todo}
				/>
			</form>
		</div>
	);
};

export default AddTodo;
