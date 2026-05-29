class ProfitLossFoReportResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      summary: response.data?.summary
        ? {
            charges: response.data.summary.charges
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
        unRealisedPnl: pnl.unRealisedPnl,
        saleVal: pnl.saleVal,
        sellAvg: pnl.sellAvg,
        buyAvg: pnl.buyAvg,
        dispQty: pnl.dispQty,
        charges: pnl.charges,
        qty: pnl.qty,
        buyVal: pnl.buyVal,
        mrktVal: pnl.mrktVal,
        unRealisedPnlPerc: pnl.unRealisedPnlPerc,
        closePrice: pnl.closePrice,
        isRealized: pnl.isRealized

      })) || []

    };

  }

}

module.exports = ProfitLossFoReportResponse;