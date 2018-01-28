import { SidebarLeftScaleDown as Sidebar } from "./components/common/sidebar/Sidebar";
import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import "./App.css";

import { Routes } from "./components/common/Routes";

console.log(process.env);

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_SERVER_URL, // TODO add enviroments
    credentials: "include"
  }),
  cache: new InMemoryCache()
});

class App extends React.Component<{}> {
  render() {
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
