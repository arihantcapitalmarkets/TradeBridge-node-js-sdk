class IntradayCandleDataRequest {

  constructor(request = {}) {

    this.symbol = request.symbol;
    this.resolution = request.resolution;
    this.instrument = request.instrument;
    this.exc = request.exc;
    this.startTime = request.startTime;
    this.endTime = request.endTime;

  }

}

module.exports = IntradayCandleDataRequest;