import gql from "graphql-tag";
import { QueryResult } from "react-apollo";
import { Rule } from "../../../models/Rule";

const RulesOnUserQuery = gql`
  {
    user {
      rules {
        id
        sender
        subject
        content
      }
    }
  }
`;

type Response = QueryResult<{ user: { rules: Rule[] } }>;

export { RulesOnUserQuery, Response };
