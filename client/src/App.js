import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList';
import 'tachyons';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
	return (
		<GlobalProvider>
			<div className='tc'>
				<h1 className='f1'>Todo list</h1>
				<AddTodo />
				<TodoList />
			</div>
		</GlobalProvider>
	);
}

export default App;
