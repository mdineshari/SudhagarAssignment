import express from 'express';

import bodyParser from 'body-parser';
import { check, validationResult } from 'express-validation';

import Todo from './APIs/TodoAPI/Todo';
import user from './APIs/LoginAPI/user.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (request, response) => {
  let myUser = new user();
  var userInfo = {
    username: request.query.username,
    password: request.query.password,
  };
  console.log('dsfafds ' + userInfo.username);
  myUser.getTodos(userInfo, result => {
    myUser.Database.stopConnection();
    response
      .json({
        data: result,
        success: {
          'status:': 200,
          message: 'Get Data Success',
        },
      })
      .status(200);
  });
});

app.post('/signup', (req, res) => {
  var userinfo = {
    userid: 0,
    username: req.body.username,
    password: req.body.password,
  };

  let myUser = new user();
  myUser.createTodo(userinfo, result => {
    myUser.Database.stopConnection();
    res
      .json({
        success: {
          status: 200,
          message: result,
        },
      })
      .status(200);
  });
});

app.get('/', (request, response) => {
  response.send('Todo List Rest API');
});

app.get('/get', (request, response) => {
  let myTodo = new Todo();

  myTodo.getTodos(result => {
    myTodo.Database.stopConnection();
    response
      .json({
        data: result,
        success: {
          'status:': 200,
          message: 'Get Data Success',
        },
      })
      .status(200);
  });
});

app.get('/get/:id', (request, response) => {
  let myTodo = new Todo();
  myTodo.getTodos(request.params.id, result => {
    response
      .json({
        data: result,
        success: {
          status: 200,
          message: 'Get Data Success',
        },
      })
      .status(200);
  });
});

app.get('/done/:id', (request, response) => {
  let myTodo = new Todo();

  myTodo.doneTodo(request.params.id, result => {
    response
      .json({
        success: {
          status: 200,
          message: result,
        },
      })
      .status(200);
  });
});

app.get('/delete/:id', (request, response) => {
  let myTodo = new Todo();

  myTodo.deleteTodo(request.params.id, result => {
    response
      .json({
        success: {
          status: 200,
          message: result,
        },
      })
      .status(200);
  });
});

app.get('/flush', (request, response) => {
  let myTodo = new Todo();
  myTodo.flushTodo(result => {
    myTodo.Database.stopConnection();
    response
      .json({
        sucess: {
          status: 200,
          message: result,
        },
      })
      .status(200);
  });
});

app.post(
  '/create',
  /*[
    check('name')
      .exists()
      .isLength({ min: 5 }),
  ],*/
  (request, response) => {
    //const errors = validationResult(request);
    // if (!errors.isEmpty()) {
    //   return response.status(422).json({
    //     error: {
    //       status: 422,
    //       message: errors.arry(),
    //     },
    //   });
    // }
    let myTodo = new Todo();
    myTodo.createTodo({ ...request.body }, result => {
      myTodo.Database.stopConnection();
      response
        .json({
          success: {
            status: 200,
            message: result,
          },
        })
        .status(200);
    });
  }
);

app.listen(3000, () => {
  console.log('Listen on Port 3000');
});
