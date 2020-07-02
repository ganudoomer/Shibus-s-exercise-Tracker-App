const express = require('express');
const cros = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

const app = express();

app.use(cros());
app.use(express.json());

mongoose.connect('mongodb://localhost/exercise', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', function() {
	console.log('mongodb server established ');
});

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(4000, () => {
	console.log('Server is runing master');
});
