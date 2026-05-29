class HistoricalCandleDataResponse {

  constructor(response = {}) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      dataPoints: response.data?.dataPoints || []
    };

  }

}

module.exports = HistoricalCandleDataResponse;