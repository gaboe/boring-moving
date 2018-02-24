import gql from "graphql-tag";
import { QueryResult, ChildProps } from "react-apollo";
import { IImapConfig } from "../../../models/IImapConfig";

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

type Response = QueryResult<{
  imapConfig: IImapConfig;
}>;
type Props = ChildProps<Response, {}>;

export { IMAPCONFIG_QUERY, Response, Props };
