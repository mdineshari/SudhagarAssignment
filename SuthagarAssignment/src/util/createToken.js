
var secretKey = 
export default class createToken {
  constructor(user) {
    var token = jsonwebtoken.sign(
      {
        id: user.id,
        username: user.username,
      },
      '123456789'
    );
    return token;
  }
}
