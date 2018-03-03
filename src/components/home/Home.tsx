import * as React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  MostActiveQueryComponent,
  MOST_ACTIVE_RULES_QUERY
} from "../../gql/queries/rules/MostActiveRulesQuery";
import { MostActiveRulesQueryVariables } from "../../generated/types";
import { Header } from "semantic-ui-react";
import { Row, Col } from "react-grid-system";

const Home: React.SFC<{}> = props => {
  const variables: MostActiveRulesQueryVariables = { count: 5 };
  return (
    <MostActiveQueryComponent
      query={MOST_ACTIVE_RULES_QUERY}
      variables={variables}
    >
      {result => {
        if (result.loading) {
          return null;
        }
        if (result.data) {
          return (
            <>
              <Row>
                <Col offset={{ sm: 1, lg: 3 }} sm={10} lg={6}>
                  <Header
                    as="h3"
                    content={`Boring moving moved ${
                      result.data.mostActiveRules.count
                      } emails`}
                  />
                  <BarChart
                    width={900}
                    height={600}
                    data={result.data.mostActiveRules.rules.map(x => {
                      return { rule: `${x.rule.folderName}`, count: x.count };
                    })}
                  >
                    <XAxis dataKey="rule" />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="count" fill="#016936" barSize={30} />
                  </BarChart>
                </Col>
              </Row>
            </>
          );
        }
        return (
          <Header
            as="h3"
            content="There are no data about moved emails. Have you configured imap and created rule?"
          />
        );
      }}
    </MostActiveQueryComponent>
  );
};
export { Home };
