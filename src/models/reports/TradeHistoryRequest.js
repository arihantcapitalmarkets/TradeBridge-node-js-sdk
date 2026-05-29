class TradeHistoryRequest {

  constructor(request = {}) {

    this.frmDte = request.frmDte;
    this.toDte = request.toDte;
    this.multiFilters = request.multiFilters || [];

  }

}

module.exports = TradeHistoryRequest;