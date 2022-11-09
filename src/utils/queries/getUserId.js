import { gql } from "graphql-request";

const getUserIdQuery = gql`
  query getUserByJsiId($jsiId: ID!) {
    getUserByJsiId(jsiId: $jsiId) {
      id
    }
  }
`;

export default getUserIdQuery;
