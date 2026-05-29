class GetProfileResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      clientDtls: response.data?.clientDtls?.map(client => ({
        name: client.name,
        mobNo: client.mobNo,
        email: client.email,
        clientCode: client.clientCode,
        exc: client.exc
      })) || []
    };

  }

}

module.exports = GetProfileResponse;