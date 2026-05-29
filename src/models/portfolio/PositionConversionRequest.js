class PositionConversionRequest {

  constructor(request) {

    this.type = request.type;
    this.ordAction = request.ordAction;
    this.toPrdType = request.toPrdType;
    this.prdType = request.prdType;
    this.qty = request.qty;
    this.exc = request.exc;
    this.instrument = request.instrument;
    this.lotSize = request.lotSize;
    this.excToken = request.excToken;
    this.symbol = request.symbol;
  }

}

module.exports = PositionConversionRequest;