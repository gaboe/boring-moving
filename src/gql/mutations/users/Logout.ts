import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";
import { LogoutMutation } from "../../../generated/types";

const mutation = gql`
  mutation Logout {
    logout {
      id
    }
  }
`;

type Props = ChildProps<{}, LogoutMutation>;
const withLogout = graphql<Props>(mutation);

export { mutation, Props, withLogout };
