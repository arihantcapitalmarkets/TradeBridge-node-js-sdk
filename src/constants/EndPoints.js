const ENDPOINTS = {
  LOGIN: "/auth-services/api/auth/v1/login",
  VERIFY_OTP: "/auth-services/api/auth/v1/verify-otp",
  RESEND_OTP: "/auth-services/api/auth/v1/resend-otp",
  REFRESH_TOKEN: "/auth-services/api/auth/v1/refresh-token",
  LOGOUT: "/auth-services/api/auth/v1/logout",

  CONTRACT_MASTER: "/wrapper-service/api/symbol/v1/master",
  SURVEILLANCE_SYMBOLS: "/wrapper-service/api/symbol/v1/surv-symbols",

  GET_PROFILE: "/wrapper-service/api/user/v1/get-profile",

  FUNDS: "/wrapper-service/api/funds/v1/get-funds",
  CHECK_MARGIN: "/wrapper-service/api/trade/v1/checkMargin",

  PLACE_ORDER: "/wrapper-service/api/order/v1/place-order",
  MODIFY_ORDER: "/wrapper-service/api/order/v1/modify-order",
  CANCEL_ORDER: "/wrapper-service/api/order/v1/cancel-order",
  EXIT_ORDER: "/wrapper-service/api/order/v1/exit-order",
  BROKERAGE: "/wrapper-service/api/trade/v1/brokerage",

  MARGIN_CALCULATOR: "/wrapper-service/api/trade/v1/marginCalculator",

  ORDER_BOOK: "/wrapper-service/api/order/v1/order-book",
  ORDER_TRAIL: "/wrapper-service/api/order/v1/order-trail",
  ORDER_STATUS: "/wrapper-service/api/order/v1/order-status",
  POSITIONS: "/wrapper-service/api/portfolio/v1/position-book",
  HOLDINGS: "/wrapper-service/api/portfolio/v1/holdings",
  POSITION_CONVERSION: "/wrapper-service/api/portfolio/v1/convert-position",

  PROFIT_LOSS_CASH_REPORT: "/wrapper-service/api/trade/v1/profit-loss-report",
  PROFIT_LOSS_FO_REPORT: "/wrapper-service/api/trade/v1/profit-loss-fo-report",
  LEDGER_REPORT: "/wrapper-service/api/trade/v1/ledger-report",
  TAX_PnL_EQUITY_REPORT: "/wrapper-service/api/trade/v1/tax-profit-loss-equity",
  TAX_PnL_FO_REPORT: "/wrapper-service/api/trade/v1/tax-profit-loss-fo",
  DP_HOLDINGS: "/wrapper-service/api/trade/v1/dp-holdings",
  TRADE_HISTORY: "/wrapper-service/api/trade/v1/trade-history",

  HISTORICAL_CANDLE_DATA: "/wrapper-service/api/chart/v1/historical-candle-data",
  INTRADAY_CANDLE_DATA: "/wrapper-service/api/chart/v1/intraday-candle-data"
};

module.exports = ENDPOINTS;