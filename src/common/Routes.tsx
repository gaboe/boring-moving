import * as React from "react";
import { Route } from "react-router-dom";
import { Rule } from "./../rules/Rule";
import { Home } from "./../home/Home";

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/rules" component={Rule} />
    </div>
  );
};

export { Routes };
