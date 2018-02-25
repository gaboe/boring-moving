import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  GetRuleByIDQuery,
  GetRuleByIDQueryVariables
} from "../../../generated/types";

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

type RuleType = GetRuleByIDQuery["rule"];

class RuleQuery extends Query<GetRuleByIDQuery, GetRuleByIDQueryVariables> {}

export { RULE_QUERY, RuleQuery, RuleType };
