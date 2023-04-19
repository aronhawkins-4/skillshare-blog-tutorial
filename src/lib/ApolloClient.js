import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API,
    cache: new InMemoryCache(),
  });

  export default client;