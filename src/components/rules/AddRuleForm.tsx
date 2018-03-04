import * as React from "react";
import { Form, Input, Button, InputOnChangeData } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { nameof } from "../../utils/Reflection";
import { contains, append } from "ramda";
import { AddRuleMutationVariables } from "../../generated/types";
import { RuleType } from "../../gql/queries/rules/RuleQuery";

const ButtonStyle = styled.span`
  padding-top: 1em;
  padding-right: 0.5em;
`;

type Props = {
  onSubmit: (rule: RuleType) => void;
  errorMessage?: string;
  rule?: RuleType;
};

type State = {
  rule?: RuleType;
  errors: string[];
};
class AddRuleForm extends React.Component<Props, State> {
  onSubmit = () => {
    let errors: string[] = [];
    if (
      !this.state.rule ||
      !this.state.rule.period ||
      !Number.isInteger(Number(this.state.rule.period))
    ) {
      errors = append(nameof<NonNullable<RuleType>>("period"), errors);
    }
    if (!this.state.rule || !this.state.rule.sender) {
      errors = append(nameof<NonNullable<RuleType>>("sender"), errors);
    }
    if (!this.state.rule || !this.state.rule.folderName) {
      errors = append(nameof<NonNullable<RuleType>>("folderName"), errors);
    }
    if (errors.length > 0) {
      return this.setState({ errors });
    }
    if (this.state.rule) {
      this.props.onSubmit(this.state.rule);
    }
  };
  constructor(props: Props) {
    super(props);
    this.state = { rule: props.rule, errors: [] };
  }

  handleChange = (_: {}, data: InputOnChangeData) => {
    const changedRule = { [data.name]: data.value };
    if (this.state.rule) {
      this.setState({
        rule: { ...this.state.rule, ...changedRule },
        errors: []
      });
    } else {
      this.setState({
        rule: changedRule as RuleType,
        errors: []
      });
    }
  };

  componentWillReceiveProps(props: Props) {
    if (props.rule) {
      const rule = props.rule;
      this.setState({
        rule
      });
    }
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group inline={true}>
            <Form.Field
              error={contains(
                nameof<AddRuleMutationVariables>("sender"),
                this.state.errors
              )}
            >
              <label>I am bored moving emails from</label>
              <Input
                label={{ icon: "asterisk" }}
                labelPosition="left corner"
                placeholder="email@something.com"
                name={nameof<AddRuleMutationVariables>("sender")}
                onChange={this.handleChange}
                error={contains(
                  nameof<AddRuleMutationVariables>("sender"),
                  this.state.errors
                )}
                value={this.state.rule && this.state.rule.sender}
              />
            </Form.Field>
            <Form.Field>
              <label>with subject</label>
              <Input
                placeholder="Hi this is us, again"
                name={nameof<AddRuleMutationVariables>("subject")}
                onChange={this.handleChange}
                value={this.state.rule && this.state.rule.subject}
              />
            </Form.Field>
            <Form.Field>
              <label>and these emails usually have content like </label>
              <Input
                placeholder="everything is ol'right"
                name={nameof<AddRuleMutationVariables>("content")}
                onChange={this.handleChange}
                value={this.state.rule && this.state.rule.content}
              />
            </Form.Field>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group inline={true}>
            <Form.Field
              error={contains(
                nameof<AddRuleMutationVariables>("folderName"),
                this.state.errors
              )}
            >
              <label>
                And it would be nice to move this emails to folder named
              </label>
              <Input
                label={{ icon: "asterisk" }}
                labelPosition="left corner"
                placeholder="cool folder name"
                name={nameof<AddRuleMutationVariables>("folderName")}
                onChange={this.handleChange}
                error={contains(
                  nameof<AddRuleMutationVariables>("folderName"),
                  this.state.errors
                )}
                value={this.state.rule && this.state.rule.folderName}
              />
            </Form.Field>
            <Form.Field
              error={contains(
                nameof<AddRuleMutationVariables>("period"),
                this.state.errors
              )}
            >
              <label>after</label>
              <Input
                label={{ icon: "asterisk" }}
                labelPosition="left corner"
                placeholder="5"
                name={nameof<AddRuleMutationVariables>("period")}
                onChange={this.handleChange}
                error={contains(
                  nameof<AddRuleMutationVariables>("period"),
                  this.state.errors
                )}
                value={this.state.rule && this.state.rule.period}
              />
            </Form.Field>
            <Form.Field>
              <label>minutes after receiving them.</label>
            </Form.Field>
          </Form.Group>
        </Form>
        <Button.Group>
          <Link to="/rules">
            <ButtonStyle>
              <Button>Back</Button>
            </ButtonStyle>
          </Link>
          <Button.Or />
          <ButtonStyle>
            <Button positive={true} onClick={this.onSubmit} >
              Confirm
            </Button>
          </ButtonStyle>
        </Button.Group>
      </>
    );
  }
}

export { AddRuleForm };
