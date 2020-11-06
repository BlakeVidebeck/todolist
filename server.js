const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = mongoose.Schema;
require('dotenv').config();

const app = express();

// body-parser
app.use(express.json());
app.use(cors());

// todo model
const todoSchema = new Schema({
	text: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
const Todo = mongoose.model('todo', todoSchema);

// database config
const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log('MongoDB connected...');
	} catch (err) {
		console.error(err.message);
	}
};

connectDB();

// get all todos
app.get('/todos', async (req, res) => {
	try {
		// find all todos in database
		const todos = await Todo.find();
		res.json(todos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// add a todo
app.post('/todos', async (req, res) => {
	try {
		// create new todo based off of model
		const newTodo = new Todo({
			text: req.body.text
		});

		// save todo to database
		const todo = await newTodo.save();

		res.json(todo);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// delete todo by id
app.delete('/todos/:id', async (req, res) => {
	try {
		// find todo by id
		const todo = await Todo.findById(req.params.id);
		// delete todo from database
		await todo.remove();

		res.json({ msg: 'todo removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
