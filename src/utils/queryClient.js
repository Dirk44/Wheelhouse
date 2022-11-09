import { QueryClient } from "react-query";
import graphqlClient from "./graphqlClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async function fetchGraphQL({ queryKey }) {
        const [query, variables] = queryKey;
        return graphqlClient.request(query, variables);
      },
    },
  },
});
export default queryClient;
