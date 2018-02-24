import gql from "graphql-tag";
import { IImapConfig } from "../../../models/IImapConfig";
import { ChildProps, graphql } from "react-apollo";

const mutation = gql`
  mutation SaveImapConfig(
    $userName: String!
    $password: String!
    $host: String!
    $port: Int!
  ) {
    saveImapConfig(
      userName: $userName
      password: $password
      host: $host
      port: $port
    ) {
      userName
      password
      host
      port
      userID
      id
    }
  }
`;

type Response = { saveImapConfig: IImapConfig };

type InputProps = {
  userName: string;
  password: string;
  host: string;
  port: number;
};
type Props = ChildProps<InputProps, Response>;
const withSaveImapConfigMutation = graphql<InputProps, Response>(mutation);

export { withSaveImapConfigMutation, Response, InputProps, Props };
