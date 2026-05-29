class PlaceOrderRequest {

  constructor(request) {

    this.symbol = request.symbol;
    this.ordAction = request.ordAction;
    this.amo = request.amo;
    this.triggerPrice = request.triggerPrice;
    this.limitPrice = request.limitPrice;
    this.lotSize = request.lotSize;
    this.disQty = request.disQty;
    this.boTgtPrice = request.boTgtPrice;
    this.instrument = request.instrument;
    this.ordValidity = request.ordValidity;
    this.excToken = request.excToken;
    this.exc = request.exc;
    this.trailingSL = request.trailingSL;
    this.build = request.build;
    this.prdType = request.prdType;
    this.qty = request.qty;
    this.ordType = request.ordType;
    this.boStpLoss = request.boStpLoss;
    this.remarks = request.remarks;
    this.excAlgoId = request.excAlgoId;

  }

}

module.exports = PlaceOrderRequest;