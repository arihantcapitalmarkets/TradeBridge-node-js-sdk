class CancelOrderRequest {

  constructor(request) {

   this.symbol = request.symbol;
   this.ordId = request.ordId;
   this.exc = request.exc;

  }

}

module.exports = CancelOrderRequest;