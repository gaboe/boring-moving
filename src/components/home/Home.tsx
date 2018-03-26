import * as React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  MostActiveQueryComponent,
  MOST_ACTIVE_RULES_QUERY
} from "../../gql/queries/rules/MostActiveRulesQuery";
import { MostActiveRulesQueryVariables } from "../../generated/types";
import { Header } from "semantic-ui-react";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

type State = {
  windowHeight: number;
  windowWidth: number;
}

const MovedData = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
`

class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { windowHeight: window.innerHeight, windowWidth: window.innerWidth }
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  getWidth = () => {
    console.log(this.state.windowWidth);

    if (this.state.windowWidth < 700) {
      return 400;
    }

    return this.state.windowWidth - 250;
  }

  render() {
    const variables: MostActiveRulesQueryVariables = { count: 5 };
    return (
      <MostActiveQueryComponent
        query={MOST_ACTIVE_RULES_QUERY}
        variables={variables}
      >
        {result => {
          if (result.loading || !result.data || !result.data.mostActiveRules) {
            return null;
          }
          if (result.data.mostActiveRules.count > 0) {
            return (
              <>
                <MovedData>
                  <Row>
                    <Col offset={{ xs: 2, sm: 3, }} xs={8} sm={4}>
                      <Header
                        as="h3"
                        content={`Boring moving moved ${
                          result.data.mostActiveRules.count
                          } emails`}
                      />
                    </Col>
                  </Row>
                </MovedData>
                <Row>
                  <Col>
                    <BarChart
                      layout="vertical"
                      width={this.getWidth()}
                      height={this.state.windowHeight < 600 ? this.state.windowHeight - 100 : 600}
                      data={result.data.mostActiveRules.rules.map(x => {
                        return { rule: `${x.rule.subject ? x.rule.subject : x.rule.folderName}`, count: x.count };
                      })}
                    >
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="rule" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Bar dataKey="count" fill="#016936" barSize={30} />
                    </BarChart>
                  </Col>
                </Row>
              </>
            );
          }
          return (
            <Row>
              <Col offset={{ sm: 1, lg: 2, xl: 3 }} sm={10} lg={8} xl={6}>
                <Header
                  as="h3"
                  content="There are no data about moved emails. Have you configured imap and created rule?"
                />
              </Col>
            </Row>
          );
        }}
      </MostActiveQueryComponent>
    );
  };
}
export { Home };
