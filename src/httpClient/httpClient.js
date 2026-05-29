const axios = require("axios");

class HttpClient {
  constructor({ baseURL, apiKey, token, source }) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        "Authorization": token ? `Bearer ${token}` : undefined,
        "source": source
      }
    });
  }

  async get(url, params = {}) {
    const res = await this.client.get(url, { params });
    return res.data;
  }

  async post(url, body = {}) {
    const res = await this.client.post(url, body);
    return res.data;
  }
}

module.exports = HttpClient;