const SymbolDto = require("../portfolio/SymbolDto");

class ProfitLossCashReportResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      charges: response.data?.charges,

      basicDtls: response.data?.basicDtls
      ? 
      {
      "Client ID": response.data.basicDtls["Client ID"],
      To: response.data.basicDtls["To"],
      Date: response.data.basicDtls["Date"]
      }
      : null,

      pnlCash: response.data?.pnlCash?.map(pnl => ({

        sellVal: pnl.sellVal,

        sym: pnl.sym
          ? new SymbolDto(pnl.sym)
          : null,

        otherCharges: pnl.otherCharges,
        buyDate: pnl.buyDate,
        sellAvg: pnl.sellAvg,
        sellQty: pnl.sellQty,
        buyAvg: pnl.buyAvg,
        buyQty: pnl.buyQty,
        qty: pnl.qty,
        buyVal: pnl.buyVal,
        sellDate: pnl.sellDate

      })) || []

    };

  }

}

module.exports = ProfitLossCashReportResponse;