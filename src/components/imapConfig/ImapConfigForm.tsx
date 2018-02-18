import * as React from "react";
import { Message, Form, Button, InputOnChangeData } from "semantic-ui-react";
import { nameof } from "../../utils/Reflection";
import { IImapConfig } from "../../models/IImapConfig";

type State = {
  host: string;
  port?: number;
  userName: string;
  password: string;
  formError: boolean;
};
type ComponentProps = {
  imapConfig?: IImapConfig;

  submitForm: (state: State) => void;
};

class ImapConfigForm extends React.Component<ComponentProps, State> {
  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value, formError: false });

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      host: "",
      formError: false
    };
  }
  componentWillReceiveProps(props: ComponentProps) {
    if (props.imapConfig) {
      const config = props.imapConfig;
      this.setState({
        userName: config.userName,
        password: config.password,
        host: config.host,
        port: config.port
      });
    }
  }

  submitForm = () => {
    if (
      !this.state.userName ||
      !this.state.password ||
      !this.state.host ||
      !this.state.port
    ) {
      console.log(this.state);
      return this.setState({ formError: true });
    } else {
      console.log("submit");
      this.props.submitForm(this.state);
    }
  };

  render() {
    return (
      <>
        <Form error={this.state.formError} onSubmit={this.submitForm}>
          <Form.Input
            name={nameof<State>("host")}
            label="Host"
            type="input"
            placeholder="imap.gmail.com"
            onChange={this.handleChange}
            value={this.state.host}
          />
          <Form.Input
            name={nameof<State>("port")}
            label="Port"
            type="input"
            placeholder="993"
            onChange={this.handleChange}
            value={this.state.port}
          />
          <Form.Input
            name={nameof<State>("userName")}
            label="Username"
            type="input"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.userName}
          />
          <Form.Input
            name={nameof<State>("password")}
            label="Password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
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
