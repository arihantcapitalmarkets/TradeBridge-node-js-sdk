const SymbolDto = require("../portfolio/SymbolDto");

class TaxPnLEquityResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      summary: response.data?.summary
        ? {
            realisedPnl: response.data.summary.realisedPnl,
            charges: response.data.summary.charges,
            shortTermPrc: response.data.summary.shortTermPrc,
            specTermPrc: response.data.summary.specTermPrc,
            longTermPrc: response.data.summary.longTermPrc,
            turnOver: response.data.summary.turnOver
          }
        : null,

      basicDtls: response.data?.basicDtls
        ? {
            "Client ID": response.data.basicDtls["Client ID"],
            To: response.data.basicDtls["To"],
            Date: response.data.basicDtls["Date"]
          }
        : null,

      pnlCash: response.data?.pnlCash?.map(pnl => ({

        realisedPnl: pnl.realisedPnl,
        realisedPnlPerc: pnl.realisedPnlPerc,
        sellVal: pnl.sellVal,

        sym: pnl.sym
          ? new SymbolDto(pnl.sym)
          : null,

        buyDate: pnl.buyDate,
        sellAvg: pnl.sellAvg,
        sellQty: pnl.sellQty,
        fmv: pnl.fmv,
        noOfDays: pnl.noOfDays,
        buyAvg: pnl.buyAvg,
        buyQty: pnl.buyQty,
        specPrlo: pnl.specPrlo,
        qty: pnl.qty,
        buyVal: pnl.buyVal,
        longPrlo: pnl.longPrlo,
        sellDate: pnl.sellDate,
        shortPrlo: pnl.shortPrlo,
        ltcg: pnl.ltcg

      })) || []

    };

  }

}

module.exports = TaxPnLEquityResponse;