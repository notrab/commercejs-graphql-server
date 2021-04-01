const resolvers = {
  Query: {
    products: (_, { input }, { dataSources: { ProductsAPI } }) =>
      ProductsAPI.getProducts(input),
    product: (_, { input: { id } }, { dataSources: { ProductsAPI } }) =>
      ProductsAPI.getProduct(id),
  },
};

module.exports = resolvers;
