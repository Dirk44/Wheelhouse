import { gql } from "graphql-request";

const createOrderQuery = gql`
  mutation createOrder($userId: ID!, $itemId: ID!, $quantity: Int!) {
    createOrder(input: { jsiId: $userId, itemInputs: { itemCatalogueId: $itemId, quantity: $quantity } })
  }
`;

export default createOrderQuery;
