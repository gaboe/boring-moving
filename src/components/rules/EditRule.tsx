import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Query } from "react-apollo";
import {
  RULE_QUERY,
  Response,
  InputProps
} from "../../gql/queries/rules/RuleQuery";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData } from "semantic-ui-react";
import { AddRuleMutation } from "../../generated/types";

type Props = RouteComponentProps<{}> & InputProps;
type State = { errors: string[] };
type RuleType = NonNullable<AddRuleMutation["addRule"]>;

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
    const id = (this.props.match.params as RuleType).id;
    console.log(id);
    return (
      <Query query={RULE_QUERY} variables={this.state}>
        {(response: Response) => {
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
      </Query>
    );
  }
}

export { EditRule };
