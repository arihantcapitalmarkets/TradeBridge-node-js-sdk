class SymbolDto {

  constructor(symbol) {

    this.symbol = symbol.symbol;
    this.dispSym = symbol.dispSym;
    this.instrument = symbol.instrument;
    this.baseSym = symbol.baseSym;
    this.companyName = symbol.companyName;
    this.isin = symbol.isin;
    this.exc = symbol.exc;
    this.excTkn = symbol.excTkn;
    this.series = symbol.series;
    this.lotSize = symbol.lotSize;
    this.tickSize = symbol.tickSize;
    this.expiryDate = symbol.expiryDate;
    this.optionType = symbol.optionType;
    this.strikePrice = symbol.strikePrice;
    this.streamSym = symbol.streamSym;
    this.segment = symbol.segment;
    this.fno = symbol.fno;
    this.mtf = symbol.mtf;
    this.multiplier = symbol.multiplier;
    this.freezeQty = symbol.freezeQty;
    this.tradingSymbol = symbol.tradingSymbol;
    this.otherExc = symbol.otherExc || [];
    this.isWeeklyExpiry = symbol.isWeeklyExpiry;
    this.asset = symbol.asset;

  }

}

module.exports = SymbolDto;