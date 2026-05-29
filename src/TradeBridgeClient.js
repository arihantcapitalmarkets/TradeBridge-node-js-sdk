const HttpClient = require("../src/httpClient/httpClient");

const LoginApi = require("./apis/LoginApi");
const ContractMasterApi = require("./apis/ContractMasterApi")
const GetProfileApi = require("./apis/GetProfileApi")
const FundsApi = require("./apis/FundsApi");
const OrderApi = require("./apis/OrderApi");
const MarginApi = require("./apis/MarginApi");
const PortfolioApi = require("./apis/PortfolioApi");
const ChartApi = require("./apis/ChartApi");
const ReportsApi = require("./apis/ReportsApi")


class TradeBridgeClient {
  constructor(config) {
    this.baseURL = config.baseURL;
    this.apiKey = config.apiKey;
    this.source = config.source;
    this.token = config.token || null;

    this.http = new HttpClient({
      baseURL: this.baseURL,
      apiKey: this.apiKey,
      token: this.token,
      source: this.source
    });

    this.login = new LoginApi(this.http);
    this.contractMaster = new ContractMasterApi(this.http);
    this.getProfile = new GetProfileApi(this.http);
    this.funds = new FundsApi(this.http);
    this.orders = new OrderApi(this.http);
    this.margin = new MarginApi(this.http);
    this.portfolio = new PortfolioApi(this.http);
    this.chart = new ChartApi(this.http);
    this.reports = new ReportsApi(this.http);
  }

  setAccessToken(token) {
    this.token = token;
    this.http.client.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  setLatLong(latitude, longitude) {
    this.http.client.defaults.headers["X-latitude"] = latitude;
    this.http.client.defaults.headers["X-longitude"] = longitude;
  }

}

module.exports = TradeBridgeClient;