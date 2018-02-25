import * as React from "react";
import { RouteComponentProps } from "react-router";
import {
  RULE_QUERY,
  RuleQuery,
  RuleType
} from "../../gql/queries/rules/RuleQuery";
import { AddRuleForm } from "./AddRuleForm";

type Props = RouteComponentProps<{ id: string }>;
type State = { errors: string[]; rule?: RuleType };

class EditRule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { errors: [] };
  }

  onSubmit = (rule: RuleType) => {
    console.log(rule);
  };

  render() {
    const id = this.props.match.params.id;
    return (
      <RuleQuery query={RULE_QUERY} variables={{ id }}>
        {response => {
          if (response.data) {
            return (
              <>
                <h1>EditRule</h1>
                <AddRuleForm
                  onSubmit={this.onSubmit}
                  rule={response.data.rule}
                />
              </>
            );
          }
          return null;
        }}
      </RuleQuery>
    );
  }
}

export { EditRule };
