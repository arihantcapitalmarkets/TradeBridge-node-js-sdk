const TradeBridgeClient = require("../../index");
const LoginRequest = require("../models/login/LoginRequest");
const VerifyOtpRequest = require("../models/login/VerifyOtpRequest");
const ResendOtpRequest = require("../models/login/ResendOtpRequest");
const RefreshTokenRequest = require("../models/login/RefreshTokenRequest");
const CheckMarginRequest = require("../models/funds/CheckMarginRequest");
const PlaceOrderRequest = require("../models/order/PlaceOrderRequest");
const ModifyOrderRequest = require("../models/order/ModifyOrderRequest");
const CancelOrderRequest = require("../models/order/CancelOrderRequest");
const ExitOrderRequest = require("../models/order/ExitOrderRequest");
const BrokerageRequest = require("../models/order/BrokerageRequest");
const MarginCalculatorRequest = require("../models/margin/MarginCalculatorRequest");
const OrderTrailRequest = require("../models/portfolio/OrderTrailRequest");
const PositionConversionRequest = require("../models/portfolio/PositionConversionRequest");
const ProfitLossCashReportRequest = require("../models/reports/ProfitLossCashReportRequest");
const ProfitLossFoReportRequest = require("../models/reports/ProfitLossFoReportRequest");
const LedgerReportRequest = require("../models/reports/LedgerRequest");
const TaxPnLEquityRequest = require("../models/reports/TaxPnLEquityRequest");
const TaxPnLFoRequest = require("../models/reports/TaxPnLFoRequest");
const DpHoldingsRequest = require("../models/reports/DpHoldingsRequest");
const TradeHistoryRequest = require("../models/reports/TradeHistoryRequest");
const ReportFilters = require("../models/reports/ReportFilters");
const TradeHistoryMultiFilter = require("../models/reports/TradeHistoryMultiFilter");
const IntradayCandleDataRequest = require("../models/charts/IntradayCandleDataRequest");
const OrdActionEnum = require("../enums/OrdActionEnum");
const ExcEnum = require("../enums/ExcEnum");
const InstrumentEnum = require("../enums/InstrumentEnum");
const OrdTypeEnum = require("../enums/OrdTypeEnum");
const PrdTypeEnum = require("../enums/PrdTypeEnum");
const OrdValidityEnum = require("../enums/OrdValidityEnum");

// LOGIN API
async function loginAPI() {
  const request = new LoginRequest({
    userId: "ne***003",
    password: "aa***111"
  });

  const response = await api.login.login(request);
  console.dir(response, { depth: null });
}

// VERIFY OTP API
async function verifyOtpAPI() {
  const request = new VerifyOtpRequest({
    userId: "ne***003",
    txnId: "ad11b70d-5a72-492b-be77-872edacc2e60",
    otp: "782072"
  });

  const response = await api.login.verifyOtp(request);
  console.dir(response, { depth: null });
}

// RESEND OTP API
async function resendOtpAPI() {
  const request = new ResendOtpRequest({
    userId: "ne***003",
    txnId: "ad11b70d-5a72-492b-be77-872edacc2e60"
  });

  const response = await api.login.resendOtp(request);
  console.dir(response, { depth: null });
}

// REFRESH TOKEN API
async function refreshTokenAPI() {
  const request = new RefreshTokenRequest({
    userId: "ne***003",
    refreshToken: "3c842da2b04742c6acec1ca27143c6eeb117c5d62887430eb0fa197df9a958b2"
  });

  const response = await api.login.refreshToken(request);
  console.dir(response, { depth: null });
}

// LOGOUT API
async function logoutAPI() {
  api.setAccessToken(token);

  const response = await api.login.logout();
  console.dir(response, { depth: null });
}

// CONTRACT MASTER API
async function contractMasterAPI() {
  
  const response = await api.contractMaster.contractMaster({
    exch: "NSE"
  });
  console.dir(response, { depth: null });
}

// SURVEILLANCE SYMBOLS API
async function surveillanceSymbolsAPI() {
  const response = await api.contractMaster.survSymbols();
  console.dir(response, { depth: null });
}

// GET PROFILE API
async function getProfileAPI() {
  api.setAccessToken(token);

  const response = await api.getProfile.getProfile();
  console.dir(response, { depth: null });
}

// FUNDS API
async function fundsAPI() {
  api.setAccessToken(token);

  const response = await api.funds.funds();
  console.dir(response, { depth: null });
}

// CHECK MARGIN API
async function checkMarginAPI() {
  api.setAccessToken(token);

  const request = new CheckMarginRequest({
    symbol: "TCS-EQ",
    ordAction: OrdActionEnum.BUY,
    amo: false,
    triggerPrice: 0,
    limitPrice: 6.86,
    lotSize: 1,
    boTgtPrice: 0,
    instrument: InstrumentEnum.STK,
    ordValidity: OrdValidityEnum.DAY,
    excToken: "11536",
    exc: ExcEnum.NSE,
    prdType: PrdTypeEnum.INTRADAY,
    qty: 1,
    ordType: OrdTypeEnum.LIMIT,
    boStpLoss: 0
  });

  const response = await api.funds.checkMargin(request);
  console.dir(response, { depth: null });
}

// PLACE ORDER API
async function placeOrderAPI() {
  api.setAccessToken(token);
  api.setLatLong("5.66", "");

  const request = new PlaceOrderRequest({
    symbol: "TCS-EQ",
    ordAction: OrdActionEnum.BUY,
    amo: false,
    triggerPrice: 0,
    limitPrice: 0,
    lotSize: 1,
    disQty: 0,
    boTgtPrice: 0,
    instrument: InstrumentEnum.STK,
    ordValidity: OrdValidityEnum.DAY,
    excToken: "11536",
    exc: ExcEnum.NSE,
    trailingSL: 0,
    build: "MOB",
    prdType: PrdTypeEnum.DELIVERY,
    qty: 1,
    ordType: OrdTypeEnum.MARKET,
    boStpLoss: 0,
    remarks: "place-order",
    excAlgoId: ""
  });

  const response = await api.orders.placeOrder(request);
  console.dir(response, { depth: null });
}

// MODIFY ORDER API
async function modifyOrderAPI() {
  api.setAccessToken(token);
  api.setLatLong("5.66", "");

  const request = new ModifyOrderRequest({
    triggerPrice: 0,
    ordType: OrdTypeEnum.MARKET,
    prdType: PrdTypeEnum.CASH,
    instrument: InstrumentEnum.STK,
    exc: ExcEnum.NSE,
    qty: 5,
    lotSize: 0,
    symbol: "TCS-EQ",
    ordId: "260528000000011",
    ordAction: OrdActionEnum.BUY,
    limitPrice: 192.55,
    disQty: 0,
    ordValidity: OrdValidityEnum.DAY,
    tradedQty: 0,
    ordValidityDays: 0,
    exchangeToken: "11536",
    amo: false
  });

  const response = await api.orders.modifyOrder(request);
  console.dir(response, { depth: null });
}

// CANCEL ORDER API
async function cancelOrderAPI() {
  api.setAccessToken(token);
  api.setLatLong("5.66", "");

  const request = new CancelOrderRequest({
    symbol: "TCS-EQ",
    ordId: "260528000000011",
    exc: ExcEnum.NSE
  });

  const response = await api.orders.cancelOrder(request);
  console.dir(response, { depth: null });
}

// EXIT ORDER API
async function exitOrderAPI() {
  api.setAccessToken(token);
  api.setLatLong("5.66", "3.2");

  const request = new ExitOrderRequest({
    symbol: "TCS-EQ",
    exc: ExcEnum.NSE,
    prdType: PrdTypeEnum.COVER_ORDER,
    boOrdStatus: "complete",
    parOrdId: "260528000000011",
    ordId: "260528000000011"
  });

  const response = await api.orders.exitOrder(request);
  console.dir(response, { depth: null });
}

// BROKERAGE API
async function brokerageAPI() {
  api.setAccessToken(token);

  const request = new BrokerageRequest({
    symbol: "TCS-EQ",
    exc: ExcEnum.NSE,
    prdType: PrdTypeEnum.INTRADAY,
    triggerPrice: "",
    price: "3489.80",
    qty: "10",
    instrument: InstrumentEnum.STK,
    ordAction: OrdActionEnum.SELL,
    excToken: "11536",
    ordType: OrdTypeEnum.MARKET
  });

  const response = await api.orders.brokerage(request);
  console.dir(response, { depth: null });
}

// MARGIN CALCULATOR API
async function marginCalculatorAPI() {
  api.setAccessToken(token);

  const request = new MarginCalculatorRequest({
    symbols: [
      {
        symbol: "BANKNIFTY26JUL70100CE",
        netQty: "1",
        lotSize: "1",
        instrument: InstrumentEnum.OPTIDX,
        streamSym: "62278_NFO",
        excToken: "62278",
        exc: ExcEnum.NFO,
        prdType: PrdTypeEnum.DELIVERY,
        brand: []
      }
    ]
  });

  const response = await api.margin.marginCalculator(request);
  console.dir(response, { depth: null });
}

// ORDER BOOK API
async function orderBookAPI() {
  api.setAccessToken(token);

  const response = await api.portfolio.orderBook();
  console.dir(response, { depth: null });
}

// ORDER TRAIL API
async function orderTrailAPI() {
  api.setAccessToken(token);

  const request = new OrderTrailRequest({
    ordId: "260528000000011",
    instrument: InstrumentEnum.STK
  });

  const response = await api.portfolio.orderTrail(request);
  console.dir(response, { depth: null });
}

// ORDER STATUS API
async function orderStatusAPI() {
  api.setAccessToken(token);

  const request = new OrderTrailRequest({
    ordId: "260528000000011",
    instrument: InstrumentEnum.STK
  });

  const response = await api.portfolio.orderStatus(request);
  console.dir(response, { depth: null });
}

// POSITION BOOK API
async function positionBookAPI() {
  api.setAccessToken(token);

  const response = await api.portfolio.positionBook({
    type: "net"
  });
  console.dir(response, { depth: null });
}

// HOLDINGS API
async function holdingsAPI() {
  api.setAccessToken(token);

  const response = await api.portfolio.holdings();
  console.dir(response, { depth: null });
}

// POSITION CONVERSION API
async function positionConversionAPI() {
  api.setAccessToken(token);

  const request = new PositionConversionRequest({
    type: "DAY1",
    ordAction: OrdActionEnum.BUY,
    toPrdType: PrdTypeEnum.DELIVERY,
    prdType: PrdTypeEnum.INTRADAY,
    qty: 1,
    exc: ExcEnum.NSE,
    instrument: InstrumentEnum.STK,
    lotSize: 1,
    excToken: "11536",
    symbol: "TCS-EQ"
  });

  const response = await api.portfolio.positionConversion(request);
  console.dir(response, { depth: null });
}

// PROFIT LOSS CASH REPORT API
async function profitLossCashReportAPI() {
  api.setAccessToken(token);

  const request = new ProfitLossCashReportRequest({
    filters: [
    new ReportFilters("date", "13/04/2026-15/04/2026"),
    new ReportFilters("charges", "incCharges"),
    new ReportFilters("finYear", "2026-2027")
  ]
  });

  const response = await api.reports.profitLossCashReport(request);
  console.dir(response, { depth: null });
}

// PROFIT LOSS FO REPORT API
async function profitLossFoReportAPI() {
  api.setAccessToken(token);

  const request = new ProfitLossFoReportRequest({
    filters: [
    new ReportFilters("date", "01/01/2025-13/04/2026"),
    new ReportFilters("charges", "incCharges"),
    new ReportFilters("exc", "ALL"),
    new ReportFilters("finYear", "2025-2026")
  ]
  });

  const response = await api.reports.profitLossFoReport(request);
  console.dir(response, { depth: null });
}

// LEDGER REPORT API
async function ledgerReportAPI() {
  api.setAccessToken(token);

  const request = new LedgerReportRequest({
    filters: [
    new ReportFilters("date", "22/03/2026-22/04/2026"),
    new ReportFilters("prdtCd", "10"),
    new ReportFilters("finYear", "2026-2027")
  ]
  });

  const response = await api.reports.ledgerReport(request);
  console.dir(response, { depth: null });
}

// TAX PNL EQUITY REPORT API
async function taxPnLEquityReportAPI() {
  api.setAccessToken(token);

  const request = new TaxPnLEquityRequest({
    filters: [
    new ReportFilters("date", "01/04/2025-31/03/2026"),
    new ReportFilters("charges", "incCharges"),
    new ReportFilters("finYear", "2026-2027")
  ]
  });

  const response = await api.reports.taxPnLEquityReport(request);
  console.dir(response, { depth: null });
}

// TAX PNL FO REPORT API
async function taxPnLFoReportAPI() {
  api.setAccessToken(token);

  const request = new TaxPnLFoRequest({
    filters: [
    new ReportFilters("date", "01/04/2025-31/03/2026"),
    new ReportFilters("charges", "incCharges"),
    new ReportFilters("finYear", "2025-2026"),
    new ReportFilters("exc", "ALL")
  ]
  });

  const response = await api.reports.taxPnLFoReport(request);
  console.dir(response, { depth: null });
}

// DP HOLDINGS API
async function dpHoldingsAPI() {
  api.setAccessToken(token);

  const request = new DpHoldingsRequest({
    date: "22/04/2026",
    dpName: "NSDL"
  });

  const response = await api.reports.dpHoldings(request);
  console.dir(response, { depth: null });
}

// TRADE HISTORY API
async function tradeHistoryAPI() {
  api.setAccessToken(token);

  const request = new TradeHistoryRequest({
    frmDte: "01/05/2026",
    toDte: "08/05/2026",
    multiFilters: [
    new TradeHistoryMultiFilter(
      "actualExc",
      ["NSE", "CDS", "BFO"]
    ),
    new TradeHistoryMultiFilter(
      "ordAction",
      ["BUY", "SELL"]
    )
  ]
  });

  const response = await api.reports.tradeHistory(request);
  console.dir(response, { depth: null });
}

// HISTORICAL CANDLE DATA API
async function historicalCandleDataAPI() {
  api.setAccessToken(token);

  const response = await api.chart.historicalData({
    symbol: "TCS-EQ",
    resolution: "1day",
    from: "2023-02-01T17:55:00.000",
    to: "2024-02-01T17:55:00.000",
    exc: ExcEnum.NSE,
    streamSym: "12193_NSE",
    instrument: InstrumentEnum.STK
  });

  console.dir(response, { depth: null });
}

// INTRADAY CANDLE DATA API
async function intradayCandleDataAPI() {
  api.setAccessToken(token);

  const request = new IntradayCandleDataRequest({
    symbol: "JIOFIN-EQ",
    resolution: "1day",
    exc: ExcEnum.NSE,
    instrument: InstrumentEnum.STK,
    startTime: "2025-04-04T00:00:00.000",
    endTime: "2025-04-04T15:00:00.000"
  });

  const response = await api.chart.intraday(request);
  console.dir(response, { depth: null });
}



const api = new TradeBridgeClient({
  baseURL: "https://tradebridge.arihantplus.com",
  apiKey: "eVyi*******Eiplt",   
  source: "SDK"
});

const token = "eyJhbGciOiJIUzUxMiJ8*****************************bQAwR4pt7aaUsYABoCCmZiXRyw2qF3SyKmQM627kSqMDoNMLw";

async function run() {
  try {

    console.log("SDK Started...");

     await loginAPI();

    // await verifyOtpAPI();

    // await resendOtpAPI();

    // await refreshTokenAPI();

    // await logoutAPI();

    // await contractMasterAPI();

    // await surveillanceSymbolsAPI();

    // await getProfileAPI();

    // await fundsAPI();

    // await checkMarginAPI();

    // await placeOrderAPI();

    // await modifyOrderAPI();

    // await cancelOrderAPI();

    // await exitOrderAPI();

    // await brokerageAPI();

    // await marginCalculatorAPI();

    // await orderBookAPI();

    // await orderTrailAPI();

    // await orderStatusAPI();

    // await positionBookAPI();

    //  await holdingsAPI();

    //  await positionConversionAPI();

    //  await profitLossCashReportAPI();

    //  await profitLossFoReportAPI();

    //  await ledgerReportAPI();

    //  await taxPnLEquityReportAPI();

    //  await taxPnLFoReportAPI();

    //  await dpHoldingsAPI();

    //  await tradeHistoryAPI();

    // await historicalCandleDataAPI();

    // await intradayCandleDataAPI();

  } catch (err) {
    console.error( "Error:", err.response?.data || err.message );
  }
}

run();