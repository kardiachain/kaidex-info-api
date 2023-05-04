import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://ex-graph.kardiachain.io/subgraphs/name/blocklytics/kai-blocks",
  }),
  cache: new InMemoryCache(),
});
