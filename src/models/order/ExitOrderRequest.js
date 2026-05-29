class ExitOrderRequest {

  constructor(request) {

   this.symbol = request.symbol;
   this.exc = request.exc;
   this.prdType = request.prdType;
   this.boOrdStatus = request.boOrdStatus;
   this.parOrdId = request.parOrdId;
   this.ordId = request.ordId;

  }

}

module.exports = ExitOrderRequest;