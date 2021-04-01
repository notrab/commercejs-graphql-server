const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { ProductsAPI } = require("./dataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ ProductsAPI: new ProductsAPI() }),
  playground: true,
  introspection: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
