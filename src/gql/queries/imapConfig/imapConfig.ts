import gql from "graphql-tag";
import { Query } from "react-apollo";
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

class ImapConfigQueryComponent extends Query<ImapConfigQuery, {}> {}

export { IMAPCONFIG_QUERY, ImapConfigQueryComponent };
