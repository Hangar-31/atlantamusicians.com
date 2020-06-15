import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URI;

export default (ctx) => new GraphQLClient(endpoint, {
  credentials: 'include',
  headers: {
    // authorization: auth ? auth.authorizationString : '',
    domain: ctx.req.headers.host,
  },
});
