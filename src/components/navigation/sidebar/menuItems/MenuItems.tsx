import * as React from "react";
import { Query, withApollo, QueryResult } from "react-apollo";
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
import { RouteComponentProps } from "react-router";
import { UserQuery } from "../../../../generated/types";

type Props = WithApolloClient<QueryProps & MutationProps> & RouteComponentProps<{}>

const isAuthentificated = (props: QueryResult<UserQuery>) =>
  props.data !== undefined && props.data.user !== null;

const MenuItems: React.SFC<Props> = props => {
  return (
    <Query query={query}>
      {(result) => {
        return (
          <>
            {isAuthentificated(result) && <ContentMenuItems />}
            <AuthButton
              isAuthenticated={isAuthentificated(result)}
              mutate={props.mutate}
              onLogout={async () => {
                await props.client.resetStore();
                props.history.push("/login");
              }}
            />
          </>
        );
      }}
    </Query>
  );
};

const hoc = withLogout(withApollo(MenuItems));
export { hoc as MenuItems };
