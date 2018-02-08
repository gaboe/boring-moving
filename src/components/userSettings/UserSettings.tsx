import * as React from "react";
import {
  Header,
  Message,
  Form,
  InputOnChangeData,
  Button
} from "semantic-ui-react";
import { nameof } from "../../utils/Reflection";

type State = {
  server: string;
  port: number;
  userName: string;
  password: string;
  formError: boolean;
};
class UserSettings extends React.Component<{}, State> {
  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value, formError: false });
  render() {
    return (
      <>
        <Header as="h1" content="User settings" />
        <Form>
          <Form.Input
            name={nameof<State>("server")}
            label="Server"
            type="input"
            placeholder="server"
            onChange={this.handleChange}
          />
          <Form.Input
            name={nameof<State>("port")}
            label="Port"
            type="input"
            placeholder="port"
            onChange={this.handleChange}
          />
          <Form.Input
            name={nameof<State>("userName")}
            label="Username"
            type="input"
            placeholder="username"
            onChange={this.handleChange}
          />
          <Form.Input
            name={nameof<State>("password")}
            label="Password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <Message
            error={true}
            header="Ups"
            content={`It seem's like your data are not correct`}
          />
          <Button color="linkedin" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export { UserSettings };
