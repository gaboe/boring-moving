import * as React from "react";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData } from "semantic-ui-react";
import { append } from "ramda";
import { nameof } from "../../utils/Reflection";
import { RULES_ON_USER_QUERY } from "./../../gql/queries/rules/RulesOnUserQuery";
import {
  withAddRuleMutation,
  Props
} from "./../../gql/mutations/rules/AddRule";
type State = {
  sender: string;
  subject: string;
  content: string;
  folderName: string;
  period: number;
  errors: string[];
};

class AddRule extends React.Component<Props, State> {
  constructor(props: Props) {
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

  onSubmit = () => {
    let errors: string[] = [];
    if (!this.state.period || !Number.isInteger(Number(this.state.period))) {
      errors = append(nameof<State>("period"), errors);
    }
    if (!this.state.sender) {
      errors = append(nameof<State>("sender"), errors);
    }
    if (!this.state.folderName) {
      errors = append(nameof<State>("folderName"), errors);
    }
    if (errors.length > 0) {
      return this.setState({ errors });
    }
    this.addMutation();
  };

  addMutation() {
    if (this.props.mutate) {
      const { sender, content, subject, folderName, period } = this.state;
      this.props
        .mutate({
          variables: { sender, subject, content, folderName, period },
          refetchQueries: [{ query: RULES_ON_USER_QUERY }]
        })
        .then(({ data }) => {
          console.log(data.addRule);
        });
    }
  }

  render() {
    return (
      <>
        <AddRuleForm
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </>
    );
  }
}

const hoc = withAddRuleMutation(AddRule);
export { hoc as AddRule };
