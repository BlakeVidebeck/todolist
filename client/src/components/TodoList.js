import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, gettodos }) => {
	return (
		<ul className='list pl0 ml0 center mw5 ba b--light-silver br3'>
			{todos.map(todo => (
				<Todo key={todo._id} todo={todo} gettodos={gettodos} />
			))}
		</ul>
	);
};

export default TodoList;
