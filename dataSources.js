require("dotenv").config();

const { RESTDataSource } = require("apollo-datasource-rest");

class ChecAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chec.io/v1/";
  }

  willSendRequest(request) {
    if (!request.headers) {
      request.headers = {};
    }

    request.headers = {
      "X-Authorization": "pk_1930363ad01b716ec4d1e57a6f573a66e4a578796e2b9",
    };
  }
}

class ProductsAPI extends ChecAPI {
  async getProducts(params) {
    const { data } = await this.get("products", params);

    return data;
  }

  async getProduct(id) {
    return this.get(`products/${id}`);
  }
}

module.exports = {
  ProductsAPI,
};
