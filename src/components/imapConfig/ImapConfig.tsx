import * as React from "react";
import { Header, InputOnChangeData } from "semantic-ui-react";
import {
  Props,
  Response,
  IMAPCONFIG_QUERY
} from "../../gql/queries/imapConfig/imapConfig";
import { Query } from "react-apollo";
import { ImapConfigForm, State as FormState } from "./ImapConfigForm";
type State = {} & FormState;
class ImapConfig extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      port: 0,
      host: "",
      formError: false
    };
  }
  submitForm = (): void => {
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
    }
  };
  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value, formError: false });

  componentWillReceiveProps(props: Props) {
    console.log("ppp", props);
    if (props.data && props.data.imapConfig) {
      const config = props.data.imapConfig;
      this.setState({
        userName: config.userName,
        password: "",
        host: config.host,
        port: config.port
      });
    }
  }

  renderForm = (response: Response) => {
    if (response.data) {
      return (
        <ImapConfigForm
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          imapConfig={response.data.imapConfig}
        />
      );
    }
    return (
      <ImapConfigForm
        handleChange={this.handleChange}
        submitForm={this.submitForm}
      />
    );
  };

  render() {
    return (
      <>
        <Query query={IMAPCONFIG_QUERY}>
          {(response: Response) => {
            console.log("rrr", response);
            return (
              <>
                <Header as="h1" content="Imap config" />
                {this.renderForm(response)}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export { ImapConfig, State };
