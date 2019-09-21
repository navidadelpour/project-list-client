import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './pages'
import EnterForm from './pages/Form';


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/form" exact component={EnterForm}/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
