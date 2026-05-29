class TaxPnLFoResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      summary: response.data?.summary
        ? {
            realisedPnl: response.data.summary.realisedPnl,
            optTurnOver: response.data.summary.optTurnOver,
            charges: response.data.summary.charges,
            futProfit: response.data.summary.futProfit,
            optProfit: response.data.summary.optProfit,
            futTurnOver: response.data.summary.futTurnOver,
            grossProfit: response.data.summary.grossProfit
          }
        : null,

      basicDtls: response.data?.basicDtls
        ? {
            "Client ID": response.data.basicDtls["Client ID"],
            To: response.data.basicDtls["To"],
            Date: response.data.basicDtls["Date"]
          }
        : null,

      pnlFo: response.data?.pnlFo?.map(pnl => ({

        scripName: pnl.scripName,
        realisedPnl: pnl.realisedPnl,
        date: pnl.date,
        realisedPnlPerc: pnl.realisedPnlPerc,
        saleVal: pnl.saleVal,
        sellAvg: pnl.sellAvg,
        buyAvg: pnl.buyAvg,
        dispQty: pnl.dispQty,
        qty: pnl.qty,
        futProfit: pnl.futProfit,
        optProfit: pnl.optProfit,
        buyVal: pnl.buyVal,
        mrktVal: pnl.mrktVal,
        closePrice: pnl.closePrice

      })) || []

    };

  }

}

module.exports = TaxPnLFoResponse;