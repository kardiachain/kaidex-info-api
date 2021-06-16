import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://exchange-graph-2.kardiachain.io/subgraphs/name/kai/dex",
  }),
  cache: new InMemoryCache(),
});

