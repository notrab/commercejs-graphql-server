GraphQL + Commerce.js API

This is a basic datasource implementation of a GraphQL server backed by the Commerce.js API.

This example doesn't include [dataloader](https://github.com/graphql/dataloader) which is necessary when asset, and category types are added with relations to prevent N+1 queries.

Try it yourself: [https://commercejs-graphql.herokuapp.com](https://commercejs-graphql.herokuapp.com)

## Example query

```graphql
{
  singleProduct: product(input: { id: "prod_L1vOoZqkMwRa8Z" }) {
    name
  }

  twoProducts: products(input: { limit: 2 }) {
    name
  }

  allProducts: products {
    id
    name
    permalink
  }
}
```

## Example response

```json
{
  "data": {
    "singleProduct": {
      "name": "Ceramic Dutch Oven"
    },
    "twoProducts": [
      {
        "name": "Walnut Cook's Tools"
      },
      {
        "name": "Private Cooking Class"
      }
    ],
    "allProducts": [
      {
        "id": "prod_7ZAMo1eDvoNJ4x",
        "name": "Walnut Cook's Tools",
        "permalink": "walnut-cooks-tools-chopchop-shop"
      },
      {
        "id": "prod_r2LM5Q8baoZV1g",
        "name": "Private Cooking Class",
        "permalink": "private-cooking-class-chopchop-shop"
      },
      {
        "id": "prod_NXELwj0Nm53A4p",
        "name": "Essential Knife Set",
        "permalink": "essential-knife-set-chopchop-shop"
      },
      {
        "id": "prod_L1vOoZqkMwRa8Z",
        "name": "Ceramic Dutch Oven",
        "permalink": "ceramic-dutch-oven-chopchop-shop"
      },
      {
        "id": "prod_0YnEoqLJNwe7P6",
        "name": "Kitchen Sink Journal",
        "permalink": "kitchen-sink-journal-chopchop-shop"
      },
      {
        "id": "prod_QG375vxAxwrMOg",
        "name": "Tote bag",
        "permalink": "tote-chochop-shop"
      }
    ]
  }
}
```
