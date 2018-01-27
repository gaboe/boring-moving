import gql from "graphql-tag";
import { graphql } from "react-apollo";

const mutation = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

const withLoginMutation = graphql(mutation);

export { withLoginMutation };
