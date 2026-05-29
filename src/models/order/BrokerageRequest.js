class BrokerageRequest {

  constructor(request) {

    this.symbol = request.symbol;
    this.exc = request.exc;
    this.prdType = request.prdType;
    this.triggerPrice = request.triggerPrice;
    this.price = request.price;
    this.qty = request.qty;
    this.instrument = request.instrument;
    this.ordAction = request.ordAction;
    this.excToken = request.excToken;
    this.ordType = request.ordType;

  }

}

module.exports = BrokerageRequest;