import * as React from "react";
import { Route } from "react-router-dom";
import { Rules } from "./../rules/Rules";
import { Home } from "./../home/Home";
import { Login } from "./../auth/Login";
import { Register } from "../auth/Register";
import { RequireAuth } from "./../auth/RequireAuth";
import { AddRule } from "../rules/AddRule";

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/rules" component={RequireAuth(Rules)} />
      <Route path="/add-rule" component={RequireAuth(AddRule)} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export { Routes };
