import * as React from "react";
import { Query } from "react-apollo";
import { Header } from "semantic-ui-react";

import {
  RULES_ON_USER_QUERY as query,
  Response
} from "./../../gql/queries/rules/RulesOnUserQuery";
import { Table } from "./Table";

const getRules = (response: Response) => {
  if (response.data && response.data.user && response.data.user.rules) {
    return response.data.user.rules;
  }
  return [];
};

const Rules: React.SFC<{}> = props => {
  return (
    <Query query={query}>
      {(response: Response) => {
        const rules = getRules(response);
        return (
          <>
            <Header as="h1" icon="options" content="Rules" />
            <Header
              as="h5"
              content="You can see yours predifined rules, which will be executed periodicaly"
            />
            <Table rules={rules} />
          </>
        );
      }}
    </Query>
  );
};

export { Rules };
