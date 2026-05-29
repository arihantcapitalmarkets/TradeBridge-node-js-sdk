class LoginResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    const data = {
      msxtendInfo: response.data?.msxtendInfo,
      message: response.data?.message,
      txnId: response.data?.txnId,
      otpExpiryTime: response.data?.otpExpiryTime,
      twoFAType: response.data?.twoFAType
    };

    this.data = Object.fromEntries(
       Object.entries(data).filter(([_, v]) => v !== undefined)
    );
  }

}

module.exports = LoginResponse;