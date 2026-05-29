const SymbolDto = require("./SymbolDto");

class OrderBookResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      orders: response.data?.orders?.map(order => ({
        symbol: order.symbol ? new SymbolDto(order.symbol) : null,
        ordId: order.ordId,
        exchOrdId: order.exchOrdId,
        parOrdId: order.parOrdId,
        status: order.status,
        ordAction: order.ordAction,
        ordType: order.ordType,
        prdType: order.prdType,
        ordValidity: order.ordValidity,
        modifiedBy: order.modifiedBy,
        price: order.price,
        triggerPrice: order.triggerPrice,
        avgPrice: order.avgPrice,
        remarks: order.remarks,
        rejReason: order.rejReason,
        ordDate: order.ordDate,
        excOrdTime: order.excOrdTime,
        boOrdStatus: order.boOrdStatus,
        exitable: order.exitable,
        qty: order.qty,
        disQty: order.disQty,
        tradedQty: order.tradedQty,
        remainQty: order.remainQty,
        cancelledQty: order.cancelledQty,
        mktPro: order.mktPro,
        excAlgoId: order.excAlgoId,
        amo: order.amo,
        modifiable: order.modifiable,
        cancellable: order.cancellable,
        undAsset: order.undAsset
      })) || []
    };

  }

}

module.exports = OrderBookResponse;