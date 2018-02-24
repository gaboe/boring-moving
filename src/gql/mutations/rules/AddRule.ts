import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import {
  AddRuleMutationVariables,
  AddRuleMutation
} from "../../../generated/types";

const mutation = gql`
  mutation AddRule(
    $sender: String!
    $subject: String!
    $content: String!
    $folderName: String!
    $period: Int!
  ) {
    addRule(
      sender: $sender
      subject: $subject
      content: $content
      folderName: $folderName
      period: $period
    ) {
      id
      sender
      subject
      content
      folderName
      period
      userID
    }
  }
`;

type Props = ChildProps<AddRuleMutationVariables, AddRuleMutation>;

const withAddRuleMutation = graphql<AddRuleMutationVariables, AddRuleMutation>(
  mutation
);

export { withAddRuleMutation, Props };
