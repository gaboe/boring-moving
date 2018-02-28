import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  MostActiveRulesQuery,
  MostActiveRulesQueryVariables
} from "../../../generated/types";

const MOST_ACTIVE_RULES_QUERY = gql`
  query MostActiveRules($count: Int!) {
    mostActiveRules(count: $count) {
      userID
      count
      rules {
        ruleID
        count
        rule {
          id
          folderName
        }
      }
    }
  }
`;

class MostActiveQueryComponent extends Query<
  MostActiveRulesQuery,
  MostActiveRulesQueryVariables
> {}

export { MOST_ACTIVE_RULES_QUERY, MostActiveQueryComponent };
