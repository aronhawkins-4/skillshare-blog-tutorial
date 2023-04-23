import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);



  