import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo';

const TodoList = () => {
	const { todos, getTodos } = useContext(GlobalContext);

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<ul className='list pl0 ml0 center mw5 ba b--light-silver br3'>
			{todos.map(todo => (
				<Todo key={todo._id} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;
