import * as React from "react";
import { Query } from "react-apollo";
import {
  USER_QUERY as query,
  Response
} from "./../../../../gql/queries/UserQuery";
import { Props, withLogout } from "./../../../../gql/mutations/users/Logout";
import { ContentMenuItems } from "./ContentMenuItems";
import { AuthButton } from "./AuthButton";

const isAuthentificated = (props: Response) =>
  props.data !== undefined && props.data.user !== null;

const MenuItems: React.SFC<Props> = props => {
  return (
    <Query query={query}>
      {(result: Response) => {
        return (
          <>
            {isAuthentificated(result) && <ContentMenuItems />}
            <AuthButton
              isAuthenticated={isAuthentificated(result)}
              mutate={props.mutate}
            />
          </>
        );
      }}
    </Query>
  );
};

const hoc = withLogout(MenuItems);
export { hoc as MenuItems };
