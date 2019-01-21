import express from 'express';
import bodyParser from 'body-parser';

const User = require('./router/user')(express);
const Todo = require('./router/todo')(express);
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', User);
app.use('/api/todo', Todo);

app.get('/', (request, response) => {
  response.send('Todo List Rest API');
});

app.listen(3000, () => {
  console.log('Listen on Port 3000');
});
