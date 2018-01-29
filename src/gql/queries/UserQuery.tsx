import gql from "graphql-tag";
import { User } from "../../models/User";
import { QueryResult } from "react-apollo";

const USER_QUERY = gql`
  {
    user {
      id
      email
    }
  }
`;

type Response = QueryResult<{
  user: User;
}>;

export { USER_QUERY, Response };
