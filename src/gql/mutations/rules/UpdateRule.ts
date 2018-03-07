import gql from "graphql-tag";
import { UpdateRuleMutationVariables, UpdateRuleMutation } from "../../../generated/types";
import { ChildProps, graphql } from "react-apollo";

const mutation = gql`
mutation UpdateRule(
    $id: ID!,
    $sender: String!,
    $subject: String,
    $content: String,
    $folderName: String!,
    $period: Int!
) {
    updateRule(
        id: $id,
        sender: $sender, 
        subject: $subject, 
        content: $content, 
        folderName: $folderName, 
        period: $period
    ) {
      id
      sender
      subject
      content
      folderName
      period
    }
  }`

type Props = ChildProps<UpdateRuleMutationVariables, UpdateRuleMutation>;

const withUpdateRuleMutation = graphql<UpdateRuleMutationVariables, UpdateRuleMutation>(
    mutation
);

export { Props, withUpdateRuleMutation }