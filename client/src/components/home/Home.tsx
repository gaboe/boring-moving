import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { USER_QUERY as query } from "./../../gql/queries/UserQuery";
import { User } from "../../models/User";

class Home extends React.Component<{}> {
  render() {
    return (
      <Query query={query}>
        {(result: QueryResult<User>) => {
          return <div>Hello! {result.data && result.data.email}</div>;
        }}
      </Query>
    );
  }
}
export { Home };
