import user from '../APIs/user.js';
module.exports = function(express) {
  var app = express.Router();

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
  return app;
};
