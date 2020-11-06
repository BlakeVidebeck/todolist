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
		<div className='ph3 pv3 bb b--light-silver'>
			<li
				className={`w-80 dib ${complete ? 'completed' : ''}`}
				onClick={e => handleComplete(e)}
			>
				{text}
			</li>
			{complete && (
				<button className='dib w-20' onClick={e => deleteTodo(_id)}>
					X
				</button>
			)}
		</div>
	);
};

export default Todo;
