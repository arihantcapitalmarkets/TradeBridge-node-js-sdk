const SymbolDto = require("../portfolio/SymbolDto");

class TradeHistoryResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      reportList: response.data?.reportList?.map(report => ({

        date: report.date,
        tradeTime: report.tradeTime,
        netAmt: report.netAmt,
        ordAction: report.ordAction,
        netQty: report.netQty,
        orderNo: report.orderNo,

        sym: report.sym
          ? new SymbolDto(report.sym)
          : null,

        avgPrice: report.avgPrice

      })) || []

    };

  }

}

module.exports = TradeHistoryResponse;