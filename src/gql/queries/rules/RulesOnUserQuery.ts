import gql from "graphql-tag";
import { Query } from "react-apollo";
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

class RulesOnQueryComponent extends Query<RulesOnUserQuery, {}> { }

export { RULES_ON_USER_QUERY, RulesType, RulesOnQueryComponent };
