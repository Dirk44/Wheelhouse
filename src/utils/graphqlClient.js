import { GraphQLClient } from "graphql-request";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const graphqlClient = new GraphQLClient(`https://api.wheelhousetv.com/graphql`, {
  headers: {
    "Content-Type": "application/json",
    "Web-Token": getCookie("jsis"),
    "Lock-Token": Math.floor(Date.now() / 1000),
  },
});
export default graphqlClient;
