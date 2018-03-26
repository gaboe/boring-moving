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
import { ToastContainer, toast } from "react-toastify";
import { RuleVerificationModal } from "./RuleVerificationModal"

type Props = RouteComponentProps<{ id: string }> & MutationProps;
type State = { errors: string[]; rule?: RuleType, isModalOpened: boolean };

class EditRule extends React.Component<Props, State> {
  onModalClose = () => {
    this.setState({ isModalOpened: false })
  }

  constructor(props: Props) {
    super(props);
    this.state = { errors: [], isModalOpened: false };
  }

  verify = (rule: NonNullable<RuleType>) => {
    this.setState({ isModalOpened: true, rule: rule })
  };

  update = () => {
    const { rule } = this.state;
    if (this.props.mutate && rule) {
      const variables: UpdateRuleMutationVariables = {
        content: rule.content,
        folderName: rule.folderName,
        sender: rule.sender,
        period: rule.period,
        subject: rule.subject,
        id: rule.id
      }
      this.setState({ isModalOpened: false });
      this.props.mutate({
        variables: variables,
        update: (proxy, data) => {
          if (data.data) {
            const r = { rule: (data.data as GetRuleByIDQuery).rule };
            proxy.writeQuery({ query: RULE_QUERY, data: r });
          }
        }
      }).then(_ => toast.success("Rule was saved", { position: toast.POSITION.TOP_RIGHT })
      )
    }
    console.log(rule);
  };

  render() {
    const id = this.props.match.params.id;
    return (
      <>
        <RuleQuery query={RULE_QUERY} variables={{ id }}>
          {response => {
            if (response.data) {
              return (
                <>
                  <h1>EditRule</h1>
                  <AddRuleForm
                    onSubmit={this.verify}
                    rule={response.data.rule}
                  />
                  <RuleVerificationModal
                    close={this.onModalClose}
                    isOpened={this.state.isModalOpened}
                    rule={this.state.rule}
                    onContinue={this.update}
                  />
                </>
              );
            }
            return null;
          }}
        </RuleQuery>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
const hoc = withUpdateRuleMutation(EditRule)
export { hoc as EditRule };
