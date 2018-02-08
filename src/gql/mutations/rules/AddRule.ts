import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";
import { Rule } from "../../../models/Rule";

const mutation = gql`
  mutation AddRule(
    $sender: String
    $subject: String
    $content: String
    $folderName: String
    $period: Int
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

type Response = { addRule: Rule };
type InputProps = {
  sender: string;
  subject: string;
  content: string;
  folderName: string;
  period: number;
};

type Props = ChildProps<InputProps, Response>;

const withAddRuleMutation = graphql<InputProps, Response>(mutation);

export { withAddRuleMutation, Response, InputProps, Props };
