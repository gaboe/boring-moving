import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  MostActiveRulesQuery,
  MostActiveRulesQueryVariables
} from "../../../generated/types";

const MOST_ACTIVE_RULES_QUERY = gql`
  query MostActiveRules($count: Int!) {
    mostActiveRules(count: $count) {
      count
      rule {
        id
        sender
        content
        folderName
        period
      }
    }
  }
`;

class MostActiveQueryComponent extends Query<
  MostActiveRulesQuery,
  MostActiveRulesQueryVariables
> {}

export { MOST_ACTIVE_RULES_QUERY, MostActiveQueryComponent };
