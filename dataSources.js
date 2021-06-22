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

    request.headers.set(
      "X-Authorization",
      this.context.req.headers["X-Authorization"]
    );
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
