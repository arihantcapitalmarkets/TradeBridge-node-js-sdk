const SymbolDto = require("./SymbolDto");

class HoldingResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      todaysPnl: response.data?.todaysPnl,
      invested: response.data?.invested,
      unRealizedPnl: response.data?.unRealizedPnl,
      marketValue: response.data?.marketValue,

      holdings: response.data?.holdings?.map(holding => ({

        symbol: holding.symbol
          ? new SymbolDto(holding.symbol)
          : null,

        ltp: holding.ltp,
        qty: holding.qty,
        holdingQty: holding.holdingQty,
        usedQty: holding.usedQty,
        btst: holding.btst,
        pledgeQty: holding.pledgeQty,
        avgPrice: holding.avgPrice,
        invested: holding.invested,
        marketValue: holding.marketValue,
        pnlPerc: holding.pnlPerc,
        unRealizedPnl: holding.unRealizedPnl,
        haircut: holding.haircut,
        pledgeable: holding.pledgeable,
        freeQty: holding.freeQty

      })) || []

    };

  }

}

module.exports = HoldingResponse;