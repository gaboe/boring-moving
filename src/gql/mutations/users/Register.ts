import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";
import {
  RegisterMutationVariables,
  RegisterMutation
} from "../../../generated/types";

const mutation = gql`
  mutation Register($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

type Props = ChildProps<RegisterMutationVariables, RegisterMutation>;

const withRegisterMutation = graphql<
  RegisterMutationVariables,
  RegisterMutation
>(mutation);

export { withRegisterMutation, Props };
