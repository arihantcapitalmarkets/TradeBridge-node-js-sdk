const EndPoints = require("../constants/EndPoints")
const ContractMasterResponse= require("../models/contractMaster/ContractMasterResponse");
const SurveillanceSymbolsResponse = require("../models/contractMaster/SurveillanceSymbolsResponse");

class ContractMasterApi {

  constructor(http) {
    this.http = http;
  }

  async contractMaster(exchange) {
       const response = await this.http.get(EndPoints.CONTRACT_MASTER, exchange);
       return new ContractMasterResponse(response);
  }

  async survSymbols() {
       const response = await this.http.get(EndPoints.SURVEILLANCE_SYMBOLS);
       return new SurveillanceSymbolsResponse(response);
  }

}

module.exports = ContractMasterApi;