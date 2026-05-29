class CancelOrderResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;
    this.data = response.data;
  }

}

module.exports = CancelOrderResponse;