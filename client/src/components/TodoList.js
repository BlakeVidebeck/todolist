import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, gettodos }) => {
	return (
		<div>
			{todos.map(todo => (
				<Todo key={todo._id} todo={todo} gettodos={gettodos} />
			))}
		</div>
	);
};

export default TodoList;
