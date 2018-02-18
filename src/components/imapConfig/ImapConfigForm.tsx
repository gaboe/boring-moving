import * as React from "react";
import { Message, Form, Button, InputOnChangeData } from "semantic-ui-react";
import { nameof } from "../../utils/Reflection";
import { IImapConfig } from "../../models/IImapConfig";

type State = {
  host: string;
  port: number;
  userName: string;
  password: string;
  formError: boolean;
};
type ComponentProps = {
  imapConfig?: IImapConfig;

  submitForm: () => void;
  handleChange: (_: {}, data: InputOnChangeData) => void;
};
class ImapConfigForm extends React.Component<ComponentProps, State> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      port: 993,
      host: "",
      formError: false
    };
  }
  componentWillReceiveProps(props: ComponentProps) {
    console.log("ppp", props);
    if (props.imapConfig) {
      const config = props.imapConfig;
      this.setState({
        userName: config.userName,
        password: "",
        host: config.host,
        port: config.port
      });
    }
  }

  render() {
    return (
      <>
        <Form error={this.state.formError} onSubmit={this.props.submitForm}>
          <Form.Input
            name={nameof<State>("host")}
            label="Server"
            type="input"
            placeholder="imap.gmail.com"
            onChange={this.props.handleChange}
            value={this.state.host}
          />
          <Form.Input
            name={nameof<State>("port")}
            label="Port"
            type="input"
            placeholder="993"
            onChange={this.props.handleChange}
            value={this.state.port}
          />
          <Form.Input
            name={nameof<State>("userName")}
            label="Username"
            type="input"
            placeholder="username"
            onChange={this.props.handleChange}
            value={this.state.userName}
          />
          <Form.Input
            name={nameof<State>("password")}
            label="Password"
            type="password"
            placeholder="password"
            onChange={this.props.handleChange}
          />
          <Message
            error={true}
            header="Ups"
            content={`Everything must be filled`}
          />
          <Button color="linkedin" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export { ImapConfigForm, State };
