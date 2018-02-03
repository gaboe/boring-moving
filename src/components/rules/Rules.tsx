import * as React from "react";
import { Query } from "react-apollo";
import { Header } from "semantic-ui-react";
import { fromNullable } from "kanskje";

import {
  RULES_ON_USER_QUERY as query,
  Response
} from "./../../gql/queries/rules/RulesOnUserQuery";
import { Table } from "./Table";

const Rules: React.SFC<{}> = props => {
  return (
    <Query query={query}>
      {(response: Response) => {
        const rules = fromNullable(response.data)
          .map(x => x.user)
          .map(x => x.rules)
          .getOrElse([]);

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
