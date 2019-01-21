import user from '../APIs/user.js';
module.exports = function(express) {
  var app = express.Router();

  app.post('/login', (request, response) => {
    let myUser = new user();
    myUser.getUser(request.body, result => {
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
