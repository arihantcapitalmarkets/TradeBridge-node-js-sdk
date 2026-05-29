const EndPoints = require("../constants/EndPoints")
const MarginCalculatorResponse = require("../models/margin/MarginCalculatorResponse");

class MarginApi {
  constructor(http) {
    this.http = http;
  }

   async marginCalculator(body) {
       const response = await this.http.post(EndPoints.MARGIN_CALCULATOR, body);
       return new MarginCalculatorResponse(response);
   }

}

module.exports = MarginApi;