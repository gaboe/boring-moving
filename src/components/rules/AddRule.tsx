import * as React from "react";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData, Header } from "semantic-ui-react";

import { RULES_ON_USER_QUERY } from "./../../gql/queries/rules/RulesOnUserQuery";
import {
  withAddRuleMutation,
  Props
} from "./../../gql/mutations/rules/AddRule";
import { RouterProps } from "react-router";
import { AddRuleMutationVariables } from "../../generated/types";
import styled from "styled-components";
import { RuleType } from "../../gql/queries/rules/RuleQuery";
import { Row, Col } from "react-grid-system";

type State = {
  errors: string[];
} & AddRuleMutationVariables;
type PropsWithRouter = Props & RouterProps;

const HeaderStyle = styled.header`
  padding-bottom: 3em;
`;

class AddRule extends React.Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props);
    this.state = {
      errors: [],
      sender: "",
      subject: "",
      content: "",
      folderName: "",
      period: 0
    };
  }

  handleChange = (_: {}, data: InputOnChangeData) => {
    this.setState({ [data.name]: data.value, errors: [] });
  };

  addMutation = (rule: NonNullable<RuleType>) => {
    if (this.props.mutate) {
      const { sender, content, subject, folderName, period } = rule;
      this.props
        .mutate({
          variables: { sender, subject, content, folderName, period },
          refetchQueries: [{ query: RULES_ON_USER_QUERY }]
        })
        .then(({ data }) => {
          this.props.history.push("/rules");
        });
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderStyle>
              <Header as="h1" content="Create new rule" />
            </HeaderStyle>
            <AddRuleForm onSubmit={this.addMutation} />
          </Col>
        </Row>
      </>
    );
  }
}

const hoc = withAddRuleMutation(AddRule);
export { hoc as AddRule };
