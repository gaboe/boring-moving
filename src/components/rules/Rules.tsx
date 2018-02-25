import * as React from "react";
import { Header } from "semantic-ui-react";

import {
  RULES_ON_USER_QUERY as query,
  RulesOnQueryComponent,
  RulesType,
  RULES_ON_USER_QUERY
} from "./../../gql/queries/rules/RulesOnUserQuery";
import { Table } from "./Table";
import { QueryResult } from "react-apollo";
import {
  RulesOnUserQuery,
  DeleteRuleMutationVariables
} from "../../generated/types";
import {
  withDeleteRuleMutation,
  Props
} from "../../gql/mutations/rules/DeleteRule";

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

const Rules: React.SFC<Props> = props => {
  const deleteRule = (ruleID: string) => {
    if (props.mutate) {
      const variables: DeleteRuleMutationVariables = { id: ruleID };
      props.mutate({
        variables: variables,
        refetchQueries: [{ query: RULES_ON_USER_QUERY }]
      });
    }
  };
  return (
    <RulesOnQueryComponent query={query}>
      {response => {
        return (
          <>
            <Header as="h1" icon="options" content="Rules" />
            <Header
              as="h5"
              content="You can see yours predifined rules, which will be executed periodicaly"
            />
            <Table rules={getRules(response)} onDelete={deleteRule} />
          </>
        );
      }}
    </RulesOnQueryComponent>
  );
};
const withDelete = withDeleteRuleMutation(Rules);
export { withDelete as Rules };
