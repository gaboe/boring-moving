import * as React from "react";
import { LogoutButton } from "../LogoutButton";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { Props as LogoutProps } from "./../../../../gql/mutations/users/Logout";
import { USER_QUERY } from "../../../../gql/queries/users/UserQuery";

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
                update: (proxy, data) => {
                  if (data.data) {
                    proxy.writeQuery({ query: USER_QUERY, data: null });
                  }
                }
              }).then(_ => props.onLogout());
            }
          }}
        />
      )}
    </>
  );
};

export { AuthButton };
