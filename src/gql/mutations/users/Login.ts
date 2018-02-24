import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import {
  AuthentificateMutationVariables,
  AuthentificateMutation
} from "../../../generated/types";

const mutation = gql`
  mutation Authentificate(
    $googleID: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    authentificate(
      googleID: $googleID
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      id
      email
      firstName
      lastName
      googleID
    }
  }
`;

type Props = ChildProps<
  AuthentificateMutationVariables,
  AuthentificateMutation
>;

const withLoginMutation = graphql<
  AuthentificateMutationVariables,
  AuthentificateMutation
>(mutation);

export { withLoginMutation, Props };
