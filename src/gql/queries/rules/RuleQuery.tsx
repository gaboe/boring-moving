import gql from "graphql-tag";
import { QueryResult, ChildProps } from "react-apollo";
import { Rule } from "../../../models/Rule";

const RULE_QUERY = gql`
  query GetRuleByID($id: ID!) {
    rule(id: $id) {
      id
      sender
      subject
      content
      folderName
      period
    }
  }
`;

type Response = QueryResult<{ rule: Rule }>;
type InputProps = ChildProps<{ id: string }, Response>;
export { RULE_QUERY, Response, InputProps };
