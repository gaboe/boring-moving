import * as React from "react";
import { LogoutButton } from "../LogoutButton";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { Props as LogoutProps } from "./../../../../gql/mutations/users/Logout";
import { RULES_ON_USER_QUERY } from "../../../../gql/queries/rules/RulesOnUserQuery";
import { USER_QUERY } from "./../../../../gql/queries/users/UserQuery";

type Props = {
  isAuthenticated: boolean;
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
                refetchQueries: [
                  { query: USER_QUERY },
                  { query: RULES_ON_USER_QUERY }
                ]
              });
            }
          }}
        />
      )}
    </>
  );
};

export { AuthButton };
