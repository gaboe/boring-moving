import gql from "graphql-tag";
import { ChildProps } from "react-apollo";
import { ImapConfigQuery } from "../../../generated/types";

const IMAPCONFIG_QUERY = gql`
  query ImapConfig {
    imapConfig {
      id
      userName
      password
      host
      port
    }
  }
`;

type Props = ChildProps<{}, ImapConfigQuery>;

export { IMAPCONFIG_QUERY, Props };
