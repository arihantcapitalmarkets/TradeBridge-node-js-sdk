class SurveillanceSymbolsResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      symbols: response.data?.symbols
        ? {
            dispSym: response.data.symbols.dispSym || [],
            excToken: response.data.symbols.excToken || []
          }
        : null
    };

  }

}

module.exports = SurveillanceSymbolsResponse;