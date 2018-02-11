import * as React from "react";
import { Query } from "react-apollo";
import { USER_QUERY as query, Response } from "./../../gql/queries/UserQuery";

const getName = (result: Response): string => {
  if (result.data && result.data.user) {
    return result.data.user.firstName;
  }
  return "Anonymous user";
};

const Home: React.SFC<{}> = props => {
  return (
    <Query query={query}>
      {(result: Response) => {
        return <div>Hello {getName(result)}!</div>;
      }}
    </Query>
  );
};
export { Home };
