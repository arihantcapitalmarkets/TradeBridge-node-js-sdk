const SymbolDto = require("./SymbolDto");

class PositionBookResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      positions: response.data?.positions?.map(position => ({

        symbol: position.symbol
          ? new SymbolDto(position.symbol)
          : null,

        prdType: position.prdType,
        type: position.type,
        ltp: position.ltp,
        bookedPnl: position.bookedPnl,
        unRealizedPnl: position.unRealizedPnl,
        pnlPerc: position.pnlPerc,
        netPnl: position.netPnl,
        prevPos: position.prevPos,
        prevAvgPrice: position.prevAvgPrice,
        currPos: position.currPos,
        currAvgPrice: position.currAvgPrice,
        netQty: position.netQty,
        buyQty: position.buyQty,
        sellQty: position.sellQty,
        dayBuyQty: position.dayBuyQty,
        daySellQty: position.daySellQty,
        cfBuyQty: position.cfBuyQty,
        cfSellQty: position.cfSellQty,
        buyAvgPrice: position.buyAvgPrice,
        sellAvgPrice: position.sellAvgPrice,
        dayBuyAvgPrice: position.dayBuyAvgPrice,
        daySellAvgPrice: position.daySellAvgPrice,
        cfBuyAvgPrice: position.cfBuyAvgPrice,
        cfSellAvgPrice: position.cfSellAvgPrice,
        buyAmt: position.buyAmt,
        sellAmt: position.sellAmt,
        cfBuyAmt: position.cfBuyAmt,
        cfSellAmt: position.cfSellAmt,
        avgPrice: position.avgPrice,
        undAsset: position.undAsset,
        squareOff: position.squareOff,
        transferable: position.transferable,
        ordAction: position.ordAction

      })) || []
    };

  }

}

module.exports = PositionBookResponse;