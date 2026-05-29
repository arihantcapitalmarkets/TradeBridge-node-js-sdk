class RefreshTokenResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    const data = {
      accessToken: response.data?.accessToken,
      userName: response.data?.userName,
      appId: response.data?.appId,
      refreshToken: response.data?.refreshToken,
      tokenExpiry: response.data?.tokenExpiry
    };

    this.data = Object.fromEntries(
       Object.entries(data).filter(([_, v]) => v !== undefined)
    );

  }

}

module.exports = RefreshTokenResponse;