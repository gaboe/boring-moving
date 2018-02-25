import * as React from "react";
import { RouteComponentProps } from "react-router";
import { RULE_QUERY, RuleQuery } from "../../gql/queries/rules/RuleQuery";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData } from "semantic-ui-react";

type Props = RouteComponentProps<{ id: string }>;
type State = { errors: string[] };

class EditRule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { errors: [] };
  }
  handleChange = (_: {}, data: InputOnChangeData) => {
    this.setState({ [data.name]: data.value, errors: [] });
  };
  onSubmit = () => {
    console.log("object");
  };
  render() {
    const id = this.props.match.params.id;
    return (
      <RuleQuery query={RULE_QUERY} variables={{ id }}>
        {response => {
          console.log(response);
          return (
            <>
              <h1>EditRule</h1>
              <AddRuleForm
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
                errors={this.state.errors}
              />
            </>
          );
        }}
      </RuleQuery>
    );
  }
}

export { EditRule };
