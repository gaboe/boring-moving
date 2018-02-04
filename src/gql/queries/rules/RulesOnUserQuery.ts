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

type Response = QueryResult<{ user?: { rules: Rule[] } }>;

const getRules = (response: Response) => {
  if (response.data && response.data.user && response.data.user) {
    return response.data.user.rules;
  }
  return [];
};

export { RULES_ON_USER_QUERY, Response, getRules };
