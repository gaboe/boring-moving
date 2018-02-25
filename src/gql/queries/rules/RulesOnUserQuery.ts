import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { RulesOnUserQuery } from "../../../generated/types";

const RULES_ON_USER_QUERY = gql`
  query RulesOnUser {
    user {
      id
      rules {
        id
        sender
        subject
        content
        period
        folderName
        userID
      }
    }
  }
`;

type RulesType = NonNullable<NonNullable<RulesOnUserQuery["user"]>["rules"]>;

class RulesOnQueryComponent extends Query<RulesOnUserQuery, {}> {}

const getRules = (response: QueryResult<RulesOnUserQuery, {}>): RulesType => {
  if (
    response.data &&
    response.data.user &&
    response.data.user &&
    response.data.user.rules
  ) {
    return response.data.user.rules;
  }
  return [];
};

export { RULES_ON_USER_QUERY, getRules, RulesType, RulesOnQueryComponent };
