import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4000/graphql';

export default () => new GraphQLClient(endpoint, {
  headers: {
    domain: 'localhost:3000',
  },
});
