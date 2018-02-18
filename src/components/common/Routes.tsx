import * as React from "react";
import { Route } from "react-router-dom";
import { Rules } from "./../rules/Rules";
import { Home } from "./../home/Home";
import { Login } from "./../auth/Login";
import { RequireAuth } from "./../auth/RequireAuth";
import { AddRule } from "../rules/AddRule";
import { ImapConfig } from "../imapConfig/ImapConfig";

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/rules" component={RequireAuth(Rules)} />
      <Route path="/add-rule" component={RequireAuth(AddRule)} />
      <Route path="/login" component={Login} />
      {/* <Route path="/register" component={Register} /> */}
      <Route path="/user-settings" component={RequireAuth(ImapConfig)} />
    </div>
  );
};

export { Routes };
