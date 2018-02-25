import * as React from "react";
import { Header } from "semantic-ui-react";

import {
  RULES_ON_USER_QUERY as query,
  getRules,
  RulesOnQueryComponent
} from "./../../gql/queries/rules/RulesOnUserQuery";
import { Table } from "./Table";

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
