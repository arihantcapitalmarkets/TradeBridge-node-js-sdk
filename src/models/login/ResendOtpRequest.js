class ResendOtpRequest {

  constructor(request) {
    this.userId = request.userId;
    this.txnId = request.txnId;
  }

}

module.exports = ResendOtpRequest;