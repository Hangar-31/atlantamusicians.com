import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GATSBY_GRAPH_URL;

export default () => new GraphQLClient(endpoint, {
  headers: {
    domain: 'member.atlantamusicians.com',
  },
});
