import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";
import { UserQuery } from "../../generated/types";

const USER_QUERY = gql`
  query User {
    user {
      id
      email
      firstName
      lastName
      googleID
    }
  }
`;

type Props = ChildProps<{}, UserQuery>;

const withUser = graphql<{}, UserQuery>(USER_QUERY);

export { USER_QUERY, withUser, Props };
