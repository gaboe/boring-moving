import * as React from "react";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData, Header } from "semantic-ui-react";

import { RULES_ON_USER_QUERY } from "./../../gql/queries/rules/RulesOnUserQuery";
import {
  withAddRuleMutation,
  Props
} from "./../../gql/mutations/rules/AddRule";
import { RouterProps } from "react-router";
import styled from "styled-components";
import { RuleType } from "../../gql/queries/rules/RuleQuery";
import { Row, Col } from "react-grid-system";
import { RuleVerificationModal } from "./RuleVerificationModal";

type State = {
  errors: string[];
  isModalOpened: boolean;
  rule?: RuleType;
};
type PropsWithRouter = Props & RouterProps;

const HeaderStyle = styled.header`
  padding-bottom: 3em;
`;

class AddRule extends React.Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props);
    this.state = {
      errors: [],
      isModalOpened: false,
    };
  }

  handleChange = (_: {}, data: InputOnChangeData) => {
    this.setState({ [data.name]: data.value, errors: [] });
  };

  submit = (rule: NonNullable<RuleType>) => {
    this.setState({ isModalOpened: true, rule: rule })
  };

  addMutation = () => {
    console.log("object");
    if (this.props.mutate && this.state.rule) {
      console.log("hej");
      const { sender, content, subject, folderName, period } = this.state.rule;
      this.props
        .mutate({
          variables: { sender, subject, content, folderName, period },
          refetchQueries: [{ query: RULES_ON_USER_QUERY }]
        })
        .then(({ data }) => {
          console.log("hej2");
          this.props.history.push("/rules");
        });
    }
  };

  onModalClose = () => {
    this.setState({ isModalOpened: false })
  }

  render() {
    return (
      <>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderStyle>
              <Header as="h1" content="Create new rule" />
            </HeaderStyle>
            <AddRuleForm onSubmit={this.submit} />
            <RuleVerificationModal
              close={this.onModalClose}
              isOpened={this.state.isModalOpened}
              rule={this.state.rule}
              onContinue={this.addMutation}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const hoc = withAddRuleMutation(AddRule);
export { hoc as AddRule };
