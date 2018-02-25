import * as React from "react";
import { Header } from "semantic-ui-react";

import {
  RULES_ON_USER_QUERY as query,
  RulesOnQueryComponent,
  RulesType
} from "./../../gql/queries/rules/RulesOnUserQuery";
import { Table } from "./Table";
import { QueryResult } from "react-apollo";
import { RulesOnUserQuery } from "../../generated/types";

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

const Rules: React.SFC<{}> = props => {
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
            <Table rules={getRules(response)} />
          </>
        );
      }}
    </RulesOnQueryComponent>
  );
};

export { Rules };
