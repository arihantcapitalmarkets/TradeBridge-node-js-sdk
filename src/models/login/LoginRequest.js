class LoginRequest {

  constructor(request) {
    this.userId = request.userId;
    this.password = request.password;
  }

}

module.exports = LoginRequest;