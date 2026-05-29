const EndPoints = require("../constants/EndPoints")
const LoginResponse = require("../models/login/LoginResponse");
const VerifyOtpResponse = require("../models/login/VerifyOtpResponse");
const ResendOtpResponse= require("../models/login/ResendOtpResponse");
const RefreshTokenResponse= require("../models/login/RefreshTokenResponse");
const LogoutResponse= require("../models/login/LogoutResponse");

class LoginApi {

  constructor(http) {
    this.http = http;
  }

  async login(body) {
      const response = await this.http.post(EndPoints.LOGIN, body);
      return new LoginResponse(response);
  }

  async verifyOtp(body) {
     const response = await this.http.post(EndPoints.VERIFY_OTP, body);
     return new VerifyOtpResponse(response);
  }

  async resendOtp(body) {
       const response = await this.http.post(EndPoints.RESEND_OTP, body);
       return new ResendOtpResponse(response);
  }

  async refreshToken(body) {
       const response = await this.http.post(EndPoints.REFRESH_TOKEN, body);
       return new RefreshTokenResponse(response);
  }

  async logout() {
       const response = await this.http.get(EndPoints.LOGOUT);
       return new LogoutResponse(response);
  }

}

module.exports = LoginApi;