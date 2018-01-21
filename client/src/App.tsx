import { SidebarLeftScaleDown as Sidebar } from "./common/sidebar/Sidebar";
import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import { Routes } from "./common/Routes";
import { UserQuery } from "./gql/queries/UserQuery";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3001/graphql" }),
  cache: new InMemoryCache()
});

class App extends React.Component<{}> {
  render() {
    client
      .query({
        query: UserQuery
      })
      .then(console.log);
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <Sidebar>
              <Routes />
            </Sidebar>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
