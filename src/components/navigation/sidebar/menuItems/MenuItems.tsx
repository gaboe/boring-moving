import * as React from "react";
import { Query, withApollo } from "react-apollo";
import {
  USER_QUERY as query,
  Props as QueryProps
} from "./../../../../gql/queries/users/UserQuery";
import {
  Props as MutationProps,
  withLogout
} from "./../../../../gql/mutations/users/Logout";
import { ContentMenuItems } from "./ContentMenuItems";
import { AuthButton } from "./AuthButton";
import { WithApolloClient } from "react-apollo/withApollo";

type Props = WithApolloClient<QueryProps & MutationProps>;

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
              onLogout={() => props.client.resetStore()}
            />
          </>
        );
      }}
    </Query>
  );
};

const hoc = withLogout(withApollo(MenuItems));
export { hoc as MenuItems };
