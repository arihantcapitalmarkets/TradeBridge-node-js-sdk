class MarginCalculatorResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    const data = {
      spanReq: response.data?.spanReq,
      sprdBenefit: response.data?.sprdBenefit,
      totalReq: response.data?.totalReq,
      expMarginPrst: response.data?.expMarginPrst
    };

    this.data = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== null)
    );

  }

}

module.exports = MarginCalculatorResponse;