const EndPoints = require("../constants/EndPoints")
const ProfitLossCashReportResponse = require("../models/reports/ProfitLossCashReportResponse");
const ProfitLossFoReportResponse = require("../models/reports/ProfitLossFoReportResponse");
const LedgerResponse = require("../models/reports/LedgerResponse");
const TaxPnLEquityResponse = require("../models/reports/TaxPnLEquityResponse");
const TaxPnLFoResponse = require("../models/reports/TaxPnLFoResponse");
const DpHoldingsResponse = require("../models/reports/DpHoldingsResponse");
const TradeHistoryResponse = require("../models/reports/TradeHistoryResponse");

class ReportsApi {
  constructor(http) {
    this.http = http;
  }

  async profitLossCashReport(body) {
       const response = await this.http.post(EndPoints.PROFIT_LOSS_CASH_REPORT, body);
       return new ProfitLossCashReportResponse(response);
  }

  async profitLossFoReport(body) {
       const response = await this.http.post(EndPoints.PROFIT_LOSS_FO_REPORT, body);
       return new ProfitLossFoReportResponse(response);
  }

  async ledgerReport(body) {
       const response = await this.http.post(EndPoints.LEDGER_REPORT, body);
       return new LedgerResponse(response);
  }

  async taxPnLEquityReport(body) {
       const response = await this.http.post(EndPoints.TAX_PnL_EQUITY_REPORT, body);
       return new TaxPnLEquityResponse(response);
  }

  async taxPnLFoReport(body) {
       const response = await this.http.post(EndPoints.TAX_PnL_FO_REPORT, body);
       return new TaxPnLFoResponse(response);
  }

  async dpHoldings(body) {
       const response = await this.http.post(EndPoints.DP_HOLDINGS, body);
       return new DpHoldingsResponse(response);
  }

  async tradeHistory(body) {
       const response = await this.http.post(EndPoints.TRADE_HISTORY, body);
       return new TradeHistoryResponse(response);
  }

}

module.exports = ReportsApi;