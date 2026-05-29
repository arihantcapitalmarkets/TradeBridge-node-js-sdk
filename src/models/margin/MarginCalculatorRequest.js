class MarginCalculatorRequest {

  constructor(request) {

    this.symbols = request.symbols?.map(symbol => ({
      symbol: symbol.symbol,
      netQty: symbol.netQty,
      lotSize: symbol.lotSize,
      instrument: symbol.instrument,
      streamSym: symbol.streamSym,
      excToken: symbol.excToken,
      exc: symbol.exc,
      prdType: symbol.prdType,
      brand: symbol.brand
    })) || [];

  }

}

module.exports = MarginCalculatorRequest;