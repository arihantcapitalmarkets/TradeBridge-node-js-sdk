const EndPoints = require("../constants/EndPoints")
const GetProfileResponse = require("../models/profile/GetProfileResponse");

class GetProfileApi {

  constructor(http) {
    this.http = http;
  }

  async getProfile() {
       const response = await this.http.get(EndPoints.GET_PROFILE);
       return new GetProfileResponse(response);
  }

}

module.exports = GetProfileApi;