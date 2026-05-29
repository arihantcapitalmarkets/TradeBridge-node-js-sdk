class LogoutResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.data = response.data;
    this.timestamp = response.timestamp;

  }

}

module.exports = LogoutResponse;