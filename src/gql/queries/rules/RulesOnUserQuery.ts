import gql from "graphql-tag";
import { ChildProps } from "react-apollo";
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

type Props = ChildProps<{}, RulesOnUserQuery>;
type RulesType = NonNullable<NonNullable<RulesOnUserQuery["user"]>["rules"]>;

const getRules = (response: Props): RulesType => {
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

export { RULES_ON_USER_QUERY, Props, getRules, RulesType };
