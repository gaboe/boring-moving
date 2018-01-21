import * as React from "react";
const logo = require("./../logo.svg");
import "./../App.css";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Boring Moving!</h1>
      </header>
      <p className="App-intro">This app will be tremendous</p>
    </div>
  );
};

export { Home };
