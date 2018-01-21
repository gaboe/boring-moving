import gql from "graphql-tag";
import { graphql, QueryProps } from "react-apollo";

const USER_QUERY = gql`
  {
    user {
      id
      email
    }
  }
`;

type User = {
  email: string;
  id: string;
};

type Response = {
  user: User;
};

const withUser = graphql<Response>(USER_QUERY);

type R = QueryProps & Response;

export { withUser, R as QueryResponse };
