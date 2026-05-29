class ModifyOrderRequest {

  constructor(request) {

    this.triggerPrice = request.triggerPrice;
    this.ordType = request.ordType;
    this.prdType = request.prdType;
    this.instrument = request.instrument;
    this.exc = request.exc;
    this.qty = request.qty;
    this.lotSize = request.lotSize;
    this.symbol = request.symbol;
    this.ordId = request.ordId;
    this.ordAction = request.ordAction;
    this.limitPrice = request.limitPrice;
    this.disQty = request.disQty;
    this.ordValidity = request.ordValidity;
    this.tradedQty = request.tradedQty;
    this.ordValidityDays = request.ordValidityDays;
    this.exchangeToken = request.exchangeToken;
    this.amo = request.amo;

  }

}

module.exports = ModifyOrderRequest;