class BrokerageResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      brokerage: {
        externalCharges: response.data?.brokerage?.externalCharges,
        ipft: response.data?.brokerage?.ipft,
        gst: response.data?.brokerage?.gst,
        taxes: response.data?.brokerage?.taxes,
        stt: response.data?.brokerage?.stt,
        stampDuty: response.data?.brokerage?.stampDuty,
        sebiFee: response.data?.brokerage?.sebiFee,
        price: response.data?.brokerage?.price,
        qty: response.data?.brokerage?.qty,
        tot: response.data?.brokerage?.tot,
        brokeragePrice: response.data?.brokerage?.brokeragePrice,
        totalCharges: response.data?.brokerage?.totalCharges,
        ipf: response.data?.brokerage?.ipf
      }
    };

  }

}

module.exports = BrokerageResponse;