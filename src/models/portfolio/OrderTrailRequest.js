class OrderTrailRequest {

  constructor(request) {

    this.ordId = request.ordId;
    this.instrument = request.instrument;

  }

}

module.exports = OrderTrailRequest;