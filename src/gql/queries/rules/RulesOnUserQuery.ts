import gql from "graphql-tag";
import { QueryResult } from "react-apollo";
import { Rule } from "../../../models/Rule";

const RULES_ON_USER_QUERY = gql`
  {
    user {
      id
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

export { RULES_ON_USER_QUERY, Response };
