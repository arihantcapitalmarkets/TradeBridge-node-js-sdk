const EndPoints = require("../constants/EndPoints")
const PlaceOrderResponse = require("../models/order/PlaceOrderResponse");
const ModifyOrderResponse = require("../models/order/ModifyOrderResponse");
const CancelOrderResponse = require("../models/order/CancelOrderResponse");
const ExitOrderResponse =  require("../models/order/ExitOrderResponse");
const BrokerageResponse = require("../models/order/BrokerageResponse");

class OrderApi {
  constructor(http) {
    this.http = http;
  }

   async placeOrder(body) {
       const response = await this.http.post(EndPoints.PLACE_ORDER, body);
       return new PlaceOrderResponse(response);
   }

   async modifyOrder(body) {
       const response = await this.http.post(EndPoints.MODIFY_ORDER, body);
       return new ModifyOrderResponse(response);
   }

   async cancelOrder(body) {
       const response = await this.http.post(EndPoints.CANCEL_ORDER, body);
       return new CancelOrderResponse(response);
   }

   async exitOrder(body) {
       const response = await this.http.post(EndPoints.EXIT_ORDER, body);
       return new ExitOrderResponse(response);
   }

   async brokerage(body) {
       const response = await this.http.post(EndPoints.BROKERAGE, body);
       return new BrokerageResponse(response);
   }

}

module.exports = OrderApi;