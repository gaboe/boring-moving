import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";
import {
  SaveImapConfigMutationVariables as Variables,
  SaveImapConfigMutation as Mutation
} from "../../../generated/types";

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

type Props = ChildProps<Variables, Mutation>;
const withSaveImapConfigMutation = graphql<Variables, Mutation>(mutation);

export { withSaveImapConfigMutation, Props };
