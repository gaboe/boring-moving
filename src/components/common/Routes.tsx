import * as React from "react";
import { Route } from "react-router-dom";
import { Rules } from "./../rules/Rules";
import { Home } from "./../home/Home";
import { Login } from "./../auth/Login";
import { RequireAuth } from "./../auth/RequireAuth";
import { AddRule } from "../rules/AddRule";
import { ImapConfig } from "../imapConfig/ImapConfig";
import { EditRule } from "../rules/EditRule";
import { RequireAnonymous } from "../auth/RequireAnonymous";
import styled from "styled-components";

const ContenWrapper = styled.div`
  margin-top: 4em;
`

const Routes = () => {
  return (
    <>
      <ContenWrapper>
        <Route exact={true} path="/" component={RequireAuth(Home)} />
        <Route path="/rules" component={RequireAuth(Rules)} />
        <Route path="/add-rule" component={RequireAuth(AddRule)} />
        <Route path="/edit-rule/:id" component={RequireAuth(EditRule)} />
        <Route path="/login" component={RequireAnonymous(Login)} />
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/imap-config" component={RequireAuth(ImapConfig)} />
      </ContenWrapper>
    </>
  );
};

export { Routes };
