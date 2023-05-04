import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://ex-graph-v3.kardiachain.io/subgraphs/name/kaidex-v3/exchange2",
  }),
  cache: new InMemoryCache(),
});
