import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Todo = ({ todo: { _id, text } }) => {
	const [complete, setComplete] = useState(false);

	const { deleteTodo } = useContext(GlobalContext);

	return (
		<div className='ph3 pv3 bb b--light-silver'>
			<li
				className={`w-80 dib ${complete ? 'completed' : ''}`}
				onClick={e => setComplete(!complete)}
			>
				{text}
			</li>
			{complete && (
				<button className='dib w-20' onClick={() => deleteTodo(_id)}>
					X
				</button>
			)}
		</div>
	);
};

export default Todo;
