import gql from "graphql-tag";
import { User } from "../../models/User";
import { QueryResult, ChildProps, graphql } from "react-apollo";

const USER_QUERY = gql`
  {
    user {
      id
      email
      firstName
      lastName
      googleID
    }
  }
`;

type Response = QueryResult<{
  user: User;
}>;
type Props = ChildProps<{}, {}>;

const withUser = graphql<Props>(USER_QUERY);

export { USER_QUERY, Response, withUser };
