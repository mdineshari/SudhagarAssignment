var jsonwebtoken = require('jsonwebtoken');

export default class createToken {
  constructor(user) {
    var token = jsonwebtoken.sign(
      {
        id: user.id,
        username: user.username,
      },
      secretKey,
      {
        expirtsInMinute: 1440,
      }
    );
    return token;
  }
}
