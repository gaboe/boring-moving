import { Routes } from "./common/Routes";

import { SidebarLeftScaleDown as Sidebar } from "./common/sidebar/Sidebar";
import * as React from "react";
import { HashRouter as Router } from "react-router-dom";

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Router>
          <Sidebar>
            <Routes />
          </Sidebar>
        </Router>
      </div>
    );
  }
}

export default App;
