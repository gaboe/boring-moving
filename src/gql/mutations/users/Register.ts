import gql from "graphql-tag";
import { User } from "../../../models/User";
import { ChildProps, graphql } from "react-apollo";

const mutation = gql`
  mutation Register($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

type Response = { user: User };
type InputProps = { email: string; password: string };

type Props = ChildProps<InputProps, Response>;

const withRegisterMutation = graphql<InputProps, Response>(mutation);

export { withRegisterMutation, Response, InputProps, Props };
