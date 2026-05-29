class CheckMarginResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      availableCash: response.data?.availableCash,
      marginUsed: response.data?.marginUsed,
      availableMargin: response.data?.availableMargin,
      orderMargin: response.data?.orderMargin
    };

  }

}

module.exports = CheckMarginResponse;