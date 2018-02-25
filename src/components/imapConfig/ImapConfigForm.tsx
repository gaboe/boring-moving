import * as React from "react";
import { Message, Form, Button, InputOnChangeData } from "semantic-ui-react";
import { nameof } from "../../utils/Reflection";
import { SaveImapConfigMutation } from "../../generated/types";

type Imap = SaveImapConfigMutation["saveImapConfig"];

type State = {
  imap?: Imap;
  formError: boolean;
};
type ComponentProps = {
  imapConfig?: Imap;
  submitForm: (state: State) => void;
};

class ImapConfigForm extends React.Component<ComponentProps, State> {
  handleChange = (_: {}, data: InputOnChangeData) => {
    const newImap = { [data.name]: data.value };
    if (this.state.imap) {
      this.setState({
        imap: { ...this.state.imap, ...newImap },
        formError: false
      });
    } else {
      this.setState({
        imap: newImap as Imap,
        formError: false
      });
    }
    console.log(this.state);
  };

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      formError: false,
      imap: props.imapConfig
    };
  }
  componentWillReceiveProps(props: ComponentProps) {
    if (props.imapConfig) {
      const config = props.imapConfig;
      this.setState({
        imap: config
      });
    }
  }

  submitForm = () => {
    if (
      !this.state.imap ||
      !this.state.imap.userName ||
      !this.state.imap.password ||
      !this.state.imap.host ||
      !this.state.imap.port
    ) {
      return this.setState({ formError: true });
    } else {
      this.props.submitForm(this.state);
    }
  };

  render() {
    return (
      <>
        <Form error={this.state.formError} onSubmit={this.submitForm}>
          <Form.Input
            name={nameof<Imap>("host")}
            label="Host"
            type="input"
            placeholder="imap.gmail.com"
            onChange={this.handleChange}
            value={this.state.imap && this.state.imap.host}
          />
          <Form.Input
            name={nameof<Imap>("port")}
            label="Port"
            type="input"
            placeholder="993"
            onChange={this.handleChange}
            value={this.state.imap && this.state.imap.port}
          />
          <Form.Input
            name={nameof<Imap>("userName")}
            label="Username"
            type="input"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.imap && this.state.imap.userName}
          />
          <Form.Input
            name={nameof<Imap>("password")}
            label="Password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.imap && this.state.imap.password}
          />
          <Message
            error={true}
            header="Ups"
            content={`Everything must be filled`}
          />
          <Button color="linkedin" type="submit">
            Save
          </Button>
        </Form>
      </>
    );
  }
}

export { ImapConfigForm, State };
