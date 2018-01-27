import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import { User } from "../../../models/User";

const mutation = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

type Response = { user: User };
type InputProps = { email: string; password: string };

type Props = ChildProps<InputProps, Response>;

const withLoginMutation = graphql<InputProps, Response>(mutation);

export { withLoginMutation, Response, InputProps, Props };
