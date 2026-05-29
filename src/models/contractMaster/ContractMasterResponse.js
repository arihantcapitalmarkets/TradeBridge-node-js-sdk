const SymbolDto = require("../portfolio/SymbolDto");

class ContractMasterResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
          symbols: response.data?.symbols?.map(
            symbol => new SymbolDto(symbol)
          ) || []
        };
  }

}

module.exports = ContractMasterResponse;