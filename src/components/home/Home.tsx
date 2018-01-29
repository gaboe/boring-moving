import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { USER_QUERY as query } from "./../../gql/queries/UserQuery";
import { User } from "../../models/User";

class Home extends React.Component<{}> {
  getName(result: QueryResult<{ user: User }>): string {
    if (result.data && result.data.user && result.data.user.email) {
      return result.data.user.email;
    }
    return "Anonymous user";
  }
  render() {
    return (
      <Query query={query}>
        {(result: QueryResult<{ user: User }>) => {
          return (
            <div>
              {process.env.SERVER_URL}Hello! {this.getName(result)}
            </div>
          );
        }}
      </Query>
    );
  }
}
export { Home };
