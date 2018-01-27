import gql from "graphql-tag";
import { graphql, QueryProps } from "react-apollo";

import { User } from "./../../models/User";
const USER_QUERY = gql`
  {
    user {
      id
      email
    }
  }
`;

type Response = {
  user: User;
};

const withUser = graphql<Response>(USER_QUERY);

type R = QueryProps & Response;

export { withUser, R as QueryResponse, Response as ResponseType };
