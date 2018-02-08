import * as React from "react";
import { Query } from "react-apollo";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import {
  USER_QUERY as query,
  Response
} from "./../../../gql/queries/UserQuery";
import { Props, withLogout } from "./../../../gql/mutations/users/Logout";
import { LogoutButton } from "./LogoutButton";
import { RULES_ON_USER_QUERY } from "../../../gql/queries/rules/RulesOnUserQuery";

const isAuthentificated = (props: Response) =>
  props.data !== undefined && props.data.user !== null;

const MenuItems: React.SFC<Props> = props => {
  return (
    <Query query={query}>
      {(result: Response) => {
        return (
          <>
            <Menu.Item name="home">
              <Link to="/">
                <Icon name="home" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name="rules">
              <Link to="/rules">
                <Icon name="options" />
                Rules
              </Link>
            </Menu.Item>
            <Menu.Item name="user-settings">
              <Link to="/user-settings">
                <Icon name="setting" />
                User settings
              </Link>
            </Menu.Item>
            {isAuthentificated(result) || (
              <Menu.Item name="login">
                <Link to="/login">
                  <Icon name="user" />
                  Login
                </Link>
              </Menu.Item>
            )}

            {isAuthentificated(result) && (
              <LogoutButton
                onClick={() => {
                  if (props.mutate) {
                    props
                      .mutate({
                        refetchQueries: [
                          { query: query },
                          { query: RULES_ON_USER_QUERY }
                        ]
                      })
                      .then(e => console.log(props));
                  }
                }}
              />
            )}
          </>
        );
      }}
    </Query>
  );
};

const hoc = withLogout(MenuItems);
export { hoc as MenuItems };
