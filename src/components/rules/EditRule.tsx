import * as React from "react";
import { RouteComponentProps } from "react-router";
import {
  RULE_QUERY,
  RuleQuery,
  RuleType
} from "../../gql/queries/rules/RuleQuery";
import { AddRuleForm } from "./AddRuleForm";
import { withUpdateRuleMutation, Props as MutationProps } from "../../gql/mutations/rules/UpdateRule";
import { UpdateRuleMutationVariables, GetRuleByIDQuery } from "../../generated/types";

type Props = RouteComponentProps<{ id: string }> & MutationProps;
type State = { errors: string[]; rule?: RuleType };

class EditRule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { errors: [] };
  }

  onSubmit = (rule: NonNullable<RuleType>) => {
    if (this.props.mutate) {
      const variables: UpdateRuleMutationVariables = {
        content: rule.content,
        folderName: rule.folderName,
        sender: rule.sender,
        period: rule.period,
        subject: rule.subject,
        id: rule.id
      }
      this.props.mutate({
        variables: variables,
        update: (proxy, data) => {
          if (data.data) {
            const r = { rule: (data.data as GetRuleByIDQuery).rule };
            proxy.writeQuery({ query: RULE_QUERY, data: r });
          }
        }
      })
    }
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
const hoc = withUpdateRuleMutation(EditRule)
export { hoc as EditRule };
