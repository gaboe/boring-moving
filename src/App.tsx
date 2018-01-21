import { Routes } from "./common/Routes";

import { SidebarLeftScaleDown as Sidebar } from "./common/Sidebar";
import * as React from "react";
import { HashRouter as Router } from "react-router-dom";

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Router>
          <Sidebar children={Routes} />
        </Router>
      </div>
    );
  }
}

export default App;
