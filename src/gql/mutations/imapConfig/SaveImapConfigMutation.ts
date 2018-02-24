import gql from "graphql-tag";
import { ChildProps, graphql } from "react-apollo";
import {
  SaveImapConfigMutationVariables,
  SaveImapConfigMutation
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

type Props = ChildProps<
  SaveImapConfigMutationVariables,
  SaveImapConfigMutation
>;

const withSaveImapConfigMutation = graphql<
  SaveImapConfigMutationVariables,
  SaveImapConfigMutation
>(mutation);

export { withSaveImapConfigMutation, Props };
