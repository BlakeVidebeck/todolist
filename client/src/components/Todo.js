import React, { useState } from 'react';
import axios from 'axios';

const Todo = ({ todo: { _id, text }, gettodos }) => {
	const [complete, setComplete] = useState(false);

	const deleteTodo = async _id => {
		try {
			await axios.delete(`/todos/${_id}`);

			gettodos();
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleComplete = e => {
		setComplete(!complete);
	};
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<p
				className={complete ? 'completed' : ''}
				onClick={e => handleComplete(e)}
			>
				{text}
			</p>
			{complete && <button onClick={e => deleteTodo(_id)}>DELETE</button>}
		</div>
	);
};

export default Todo;
