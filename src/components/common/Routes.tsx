import * as React from "react";
import { Route } from "react-router-dom";
import { Rule } from "./../rules/Rule";
import { Home } from "./../home/Home";
import { Login } from "./../auth/Login";
import Logout from "./../auth/Logout";
import { Register } from "../auth/Register";
import { RequireAuth } from "./../auth/RequireAuth";

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/rules" component={RequireAuth(Rule)} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={RequireAuth(Logout)} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export { Routes };
