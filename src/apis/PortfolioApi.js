const EndPoints = require("../constants/EndPoints")
const OrderBookResponse = require("../models/portfolio/OrderBookResponse");
const OrderTrailResponse = require("../models/portfolio/OrderTrailResponse");
const PositionBookResponse = require("../models/portfolio/PositionBookResponse");
const HoldingsResponse = require("../models/portfolio/HoldingsResponse");
const PositionConversionResponse = require("../models/portfolio/PositionConversionResponse");

class PortfolioApi {
  constructor(http) {
    this.http = http;
  }

  async orderBook() {
       const response = await this.http.get(EndPoints.ORDER_BOOK);
       return new OrderBookResponse(response);
  }

  async orderTrail(body) {
       const response = await this.http.post(EndPoints.ORDER_TRAIL, body);
       return new OrderTrailResponse(response);
  }

  async orderStatus(body) {
       const response = await this.http.post(EndPoints.ORDER_STATUS, body);
       return new OrderTrailResponse(response);
  }
  
  async positionBook(type) {
       const response = await this.http.get(EndPoints.POSITIONS, type);
       return new PositionBookResponse(response);
  }

  async holdings() {
     const response = await this.http.get(EndPoints.HOLDINGS);
     return new HoldingsResponse(response);
  }

  async positionConversion(body) {
       const response = await this.http.post(EndPoints.POSITION_CONVERSION, body);
       return new PositionConversionResponse(response);
  }

}

module.exports = PortfolioApi;