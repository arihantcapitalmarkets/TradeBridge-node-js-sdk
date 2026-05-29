const SymbolDto = require("./SymbolDto");

class OrderTrailResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      symbol: response.data?.symbol
        ? new SymbolDto(response.data.symbol)
        : null,

      orderDetails: response.data?.orderDetails
        ? {
            tradedQty: response.data.orderDetails.tradedQty,
            ordValidity: response.data.orderDetails.ordValidity,
            ordAction: response.data.orderDetails.ordAction,
            triggerPrice: response.data.orderDetails.triggerPrice,
            prdType: response.data.orderDetails.prdType,
            qty: response.data.orderDetails.qty,
            pendingQty: response.data.orderDetails.pendingQty,
            disQty: response.data.orderDetails.disQty,
            avgPrice: response.data.orderDetails.avgPrice,
            ordId: response.data.orderDetails.ordId,
            ordType: response.data.orderDetails.ordType,
            currentOrdStatus: response.data.orderDetails.currentOrdStatus,
            rejReason: response.data.orderDetails.rejReason
          }
        : null,

      trails: response.data?.trails?.map(trail => ({
        limitPrice: trail.limitPrice,
        lupdateDateTime: trail.lupdateDateTime,
        modifiedBy: trail.modifiedBy,
        status: trail.status,
        rejReason: trail.rejReason,
        avgPrice: trail.avgPrice,
        qty: trail.qty,
        pendingQty: trail.pendingQty,
        disQty: trail.disQty,
        exc: trail.exc,
        tradedQty: trail.tradedQty,
        orderUpdatedAt: trail.orderUpdatedAt
      })) || []

    };

  }

}

module.exports = OrderTrailResponse;