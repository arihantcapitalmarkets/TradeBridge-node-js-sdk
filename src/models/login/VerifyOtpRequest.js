class VerifyOtpRequest {

  constructor(request) {
    this.userId = request.userId;
    this.txnId = request.txnId;
    this.otp = request.otp;
  }

}

module.exports = VerifyOtpRequest;