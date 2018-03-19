import * as React from "react";
import { Query } from "react-apollo";
import {
  USER_QUERY as query,
  Props as QueryProps
} from "./../../../../gql/queries/UserQuery";
import {
  Props as MutationProps,
  withLogout
} from "./../../../../gql/mutations/users/Logout";
import { ContentMenuItems } from "./ContentMenuItems";
import { AuthButton } from "./AuthButton";

type Props = QueryProps & MutationProps;

const isAuthentificated = (props: Props) =>
  props.data !== undefined && props.data.user !== null;

const MenuItems: React.SFC<Props> = props => {
  return (
    <Query query={query}>
      {(result: Props) => {
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
