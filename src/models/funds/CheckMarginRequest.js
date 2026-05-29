class CheckMarginRequest {

  constructor(request) {

    this.symbol = request.symbol;
    this.ordAction = request.ordAction;
    this.amo = request.amo;
    this.triggerPrice = request.triggerPrice;
    this.limitPrice = request.limitPrice;
    this.lotSize = request.lotSize;
    this.boTgtPrice = request.boTgtPrice;
    this.instrument = request.instrument;
    this.ordValidity = request.ordValidity;
    this.excToken = request.excToken;
    this.exc = request.exc;
    this.prdType = request.prdType;
    this.qty = request.qty;
    this.ordType = request.ordType;
    this.boStpLoss = request.boStpLoss;

  }

}

module.exports = CheckMarginRequest;