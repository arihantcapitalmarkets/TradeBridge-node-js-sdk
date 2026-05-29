const EndPoints = require("../constants/EndPoints")
const FundsResponse = require("../models/funds/FundsResponse");
const CheckMarginResponse = require("../models/funds/CheckMarginResponse")

class FundsApi {
  constructor(http) {
    this.http = http;
  }

  async funds() {
      const response = await this.http.get(EndPoints.FUNDS, { segment: "ALL" });
      return new FundsResponse(response);
  }

  async checkMargin(body) {
      const response = await this.http.post(EndPoints.CHECK_MARGIN, body);
      return new CheckMarginResponse(response);
  }

}

module.exports = FundsApi;