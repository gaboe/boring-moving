import * as React from "react";
import { Route } from "react-router-dom";
import { Rule } from "./../rules/Rule";
import { Home } from "./../home/Home";
import { Login } from "./../auth/Login";
import Logout from "./../auth/Logout";
import { Register } from "../auth/Register";

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/rules" component={Rule} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export { Routes };
