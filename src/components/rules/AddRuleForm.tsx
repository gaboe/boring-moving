import * as React from "react";
import { Form, Input, Header, Button } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  padding-bottom: 3em;
`;

const ButtonStyle = styled.span`
  padding-top: 1em;
  padding-right: 0.5em;
`;

const AddRuleForm: React.SFC<{}> = props => (
  <>
    <HeaderStyle>
      <Header as="h1" content="Create new rule" />
    </HeaderStyle>

    <Form>
      <Form.Group inline={true}>
        <Form.Field>
          <label>I am bored moving emails from</label>
          <Input
            label={{ icon: "asterisk" }}
            labelPosition="left corner"
            placeholder="email@something.com"
          />
        </Form.Field>
        <Form.Field>
          <label>with subject</label>
          <Input placeholder="Hi this is us, again" />
        </Form.Field>
        <Form.Field>
          <label>and these emails usually have content like </label>
          <Input placeholder="everything is ol'right" />
        </Form.Field>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group inline={true}>
        <Form.Field>
          <label>
            And it would be nice to move this emails to folder named
          </label>
          <Input
            label={{ icon: "asterisk" }}
            labelPosition="left corner"
            placeholder="cool folder name"
          />
        </Form.Field>
        <Form.Field>
          <label>after</label>
          <Input
            label={{ icon: "asterisk" }}
            labelPosition="left corner"
            placeholder="5"
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
      <Button color="linkedin">Confirm</Button>
    </ButtonStyle>
  </>
);

export { AddRuleForm };
