import * as React from "react";
import { LogoutButton } from "../LogoutButton";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { Props as LogoutProps } from "./../../../../gql/mutations/users/Logout";

type Props = {
  isAuthenticated: boolean;
  onLogout: () => void;
} & LogoutProps;

const AuthButton: React.SFC<Props> = props => {
  return (
    <>
      {props.isAuthenticated || (
        <Menu.Item name="login">
          <Link to="/login">
            <Icon name="user" />
            Login
          </Link>
        </Menu.Item>
      )}

      {props.isAuthenticated && (
        <LogoutButton
          onClick={() => {
            if (props.mutate) {
              props.mutate({
              }).then(_ => props.onLogout());
            }
          }}
        />
      )}
    </>
  );
};

export { AuthButton };
