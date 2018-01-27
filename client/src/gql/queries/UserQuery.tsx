import gql from "graphql-tag";

const USER_QUERY = gql`
  {
    user {
      id
      email
    }
  }
`;

export { USER_QUERY };
