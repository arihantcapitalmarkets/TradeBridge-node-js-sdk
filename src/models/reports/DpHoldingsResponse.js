const SymbolDto = require("../portfolio/SymbolDto");

class DpHoldingsResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      basicDtls: response.data?.basicDtls
        ? {
            "Client ID": response.data.basicDtls["Client ID"],
            "Client Name": response.data.basicDtls["Client Name"],
             Date: response.data.basicDtls["Date"]
          }
        : null,

      equity: response.data?.equity?.map(equity => ({

        scripName: equity.scripName,
        rate: equity.rate,

        sym: equity.sym
          ? new SymbolDto(equity.sym)
          : null,

        freeQty: equity.freeQty,
        pledgeQty: equity.pledgeQty,
        totQty: equity.totQty,
        mrktVal: equity.mrktVal

      })) || [],

      bonds: response.data?.bonds || [],

      mutualFunds: response.data?.mutualFunds || []

    };

  }

}

module.exports = DpHoldingsResponse;