import gql from "graphql-tag";
import { HasCompleteImapConfigQuery } from "../../../generated/types";
import { Query } from "react-apollo";

const HAS_COMPLETE_IMAP_CONFIG_QUERY = gql`
  query HasCompleteImapConfig {
    user {
        hasCompleteImapConfig
      }
  }
`;

class HasCompleteImapConfigComponent extends Query<HasCompleteImapConfigQuery> { }

export { HAS_COMPLETE_IMAP_CONFIG_QUERY, HasCompleteImapConfigComponent };
