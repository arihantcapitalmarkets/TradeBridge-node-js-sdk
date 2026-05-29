class ModifyOrderResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    const data = {
      ordId: response.data?.ordId,
      ordStatus: response.data?.ordStatus,
      rejReason: response.data?.rejReason
    };

    this.data = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== null)
    );

  }

}

module.exports = ModifyOrderResponse;