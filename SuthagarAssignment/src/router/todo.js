import Todo from '../APIs/Todo';
//import express from 'express';
//const app = express();

module.exports = function(express) {
  var app = express.Router();

  app.get('/get/:id', (request, response) => {
    let myTodo = new Todo();
    myTodo.getTodo(request.params.id, result => {
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

  app.delete('/delete/:id', (request, response) => {
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

  app.post('/create', (request, response) => {
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
  });
  return app;
};
