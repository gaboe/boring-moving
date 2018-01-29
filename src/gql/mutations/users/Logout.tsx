import gql from "graphql-tag";
import { ChildProps } from "react-apollo";

const mutation = gql`
  mutation {
    logout {
      id
    }
  }
`;
type Props = ChildProps<{}, {}>;

export { mutation, Props };
