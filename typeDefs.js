const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products(input: ProductsInput): [Product]
    product(input: ProductInput): Product
  }

  input ProductInput {
    id: ID!
  }

  input ProductsInput {
    limit: Int
    page: Int
    category_slug: String
  }

  type Product {
    id: ID!
    name: String!
    permalink: String!
  }
`;

module.exports = typeDefs;
