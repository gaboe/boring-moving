import * as React from "react";
import {
  Form,
  Input,
  Header,
  Button,
  InputOnChangeData
} from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { nameof } from "../../utils/Reflection";
import { contains } from "ramda";
import { AddRuleMutationVariables } from "../../generated/types";

const HeaderStyle = styled.header`
  padding-bottom: 3em;
`;

const ButtonStyle = styled.span`
  padding-top: 1em;
  padding-right: 0.5em;
`;

type Props = {
  handleChange: (_: {}, data: InputOnChangeData) => void;
  onSubmit: () => void;
  errorMessage?: string;
  errors: string[];
};

const AddRuleForm: React.SFC<Props> = props => (
  <>
    <HeaderStyle>
      <Header as="h1" content="Create new rule" />
    </HeaderStyle>

    <Form>
      <Form.Group inline={true}>
        <Form.Field
          error={contains(
            nameof<AddRuleMutationVariables>("sender"),
            props.errors
          )}
        >
          <label>I am bored moving emails from</label>
          <Input
            label={{ icon: "asterisk" }}
            labelPosition="left corner"
            placeholder="email@something.com"
            name={nameof<AddRuleMutationVariables>("sender")}
            onChange={props.handleChange}
            error={contains(
              nameof<AddRuleMutationVariables>("sender"),
              props.errors
            )}
          />
        </Form.Field>
        <Form.Field>
          <label>with subject</label>
          <Input
            placeholder="Hi this is us, again"
            name={nameof<AddRuleMutationVariables>("subject")}
            onChange={props.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>and these emails usually have content like </label>
          <Input
            placeholder="everything is ol'right"
            name={nameof<AddRuleMutationVariables>("content")}
            onChange={props.handleChange}
          />
        </Form.Field>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group inline={true}>
        <Form.Field
          error={contains(
            nameof<AddRuleMutationVariables>("folderName"),
            props.errors
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
            onChange={props.handleChange}
            error={contains(
              nameof<AddRuleMutationVariables>("folderName"),
              props.errors
            )}
          />
        </Form.Field>
        <Form.Field
          error={contains(
            nameof<AddRuleMutationVariables>("period"),
            props.errors
          )}
        >
          <label>after</label>
          <Input
            label={{ icon: "asterisk" }}
            labelPosition="left corner"
            placeholder="5"
            name={nameof<AddRuleMutationVariables>("period")}
            onChange={props.handleChange}
            error={contains(
              nameof<AddRuleMutationVariables>("period"),
              props.errors
            )}
          />
        </Form.Field>
        <Form.Field>
          <label>minutes after receiving them.</label>
        </Form.Field>
      </Form.Group>
    </Form>

    <Link to="/rules">
      <ButtonStyle>
        <Button>Back</Button>
      </ButtonStyle>
    </Link>
    <ButtonStyle>
      <Button onClick={props.onSubmit} color="linkedin">
        Confirm
      </Button>
    </ButtonStyle>
  </>
);

export { AddRuleForm };
