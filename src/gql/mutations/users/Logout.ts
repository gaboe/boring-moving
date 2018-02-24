import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";

const mutation = gql`
  mutation Logout {
    logout {
      id
    }
  }
`;

type Props = ChildProps<{}, {}>;
const withLogout = graphql<Props>(mutation);

export { mutation, Props, withLogout };
