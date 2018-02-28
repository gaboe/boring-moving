import * as React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {
  MostActiveQueryComponent,
  MOST_ACTIVE_RULES_QUERY
} from "../../gql/queries/rules/MostActiveRulesQuery";
import {
  MostActiveRulesQueryVariables,
  MostActiveRulesQuery
} from "../../generated/types";
import { Header } from "semantic-ui-react";

const getData = (data: MostActiveRulesQuery) => {
  return data.mostActiveRules.map(x => {
    return { rule: x.rule.id, count: x.count };
  });
};

const Home: React.SFC<{}> = props => {
  const variables: MostActiveRulesQueryVariables = { count: 5 };
  return (
    <MostActiveQueryComponent
      query={MOST_ACTIVE_RULES_QUERY}
      variables={variables}
    >
      {result => {
        if (result.data) {
          return (
            <>
              <LineChart
                width={800}
                height={400}
                data={getData(result.data && result.data)}
              >
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                <XAxis dataKey="rule" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </>
          );
        }
        return <Header as="h3" content="There are no data for " />;
      }}
    </MostActiveQueryComponent>
  );
};
export { Home };
