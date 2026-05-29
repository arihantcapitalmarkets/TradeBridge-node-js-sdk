class RefreshTokenRequest {

  constructor(request) {
    this.userId = request.userId;
    this.refreshToken = request.refreshToken;
  }

}

module.exports = RefreshTokenRequest;