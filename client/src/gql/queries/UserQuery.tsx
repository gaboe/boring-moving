import gql from "graphql-tag";

const UserQuery = gql`
  query {
    user {
      id
      email
    }
  }
`;

export { UserQuery };
