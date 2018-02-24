import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import { User, NonAuthenificatedUser } from "../../../models/User";

const mutation = gql`
  mutation Authentificate(
    $googleID: String
    $firstName: String
    $lastName: String
    $email: String
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

type Response = { user: User };
type InputProps = NonAuthenificatedUser;

type Props = ChildProps<InputProps, Response>;

const withLoginMutation = graphql<InputProps, Response>(mutation);

export { withLoginMutation, Response, InputProps, Props };
