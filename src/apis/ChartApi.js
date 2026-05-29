const EndPoints = require("../constants/EndPoints");
const HistoricalCandleDataResponse = require("../models/charts/HistoricalCandleDataResponse");
const IntradayCandleDataResponse = require("../models/charts/IntradayCandleDataResponse");

class ChartApi {
  constructor(http) {
    this.http = http;
  }

   async historicalData(params) {
    const response = await this.http.get(EndPoints.HISTORICAL_CANDLE_DATA, params);
    return new HistoricalCandleDataResponse(response);
  }

  async intraday(request) {
    const response = await this.http.post(EndPoints.INTRADAY_CANDLE_DATA, request);
    return new IntradayCandleDataResponse(response);
  }
}

module.exports = ChartApi;