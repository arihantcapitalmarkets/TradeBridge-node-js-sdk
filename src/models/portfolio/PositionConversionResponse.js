class PositionConversionResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      message: response.data?.message
    };

  }

}

module.exports = PositionConversionResponse;