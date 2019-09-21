import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Token from '../utils/Token';

const apiUrl = "http://localhost:4000"

const httpLink = createHttpLink({
  uri: apiUrl
})

const authLink = setContext((_, { headers }) => {
  const token = Token.get();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  
  cache: new InMemoryCache()
});

export default client