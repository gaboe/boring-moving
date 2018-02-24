import * as React from "react";
import { Query } from "react-apollo";
import { USER_QUERY as query, Props } from "./../../gql/queries/UserQuery";

const getName = (result: Props): string => {
  if (result.data && result.data.user) {
    return result.data.user.firstName;
  }
  return "Anonymous user";
};

const Home: React.SFC<Props> = props => {
  return (
    <Query query={query}>
      {(result: Props) => {
        return <div>Hello {getName(result)}!</div>;
      }}
    </Query>
  );
};
export { Home };
