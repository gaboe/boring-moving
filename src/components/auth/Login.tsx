import * as React from "react";
import { Button, Form, InputOnChangeData, Message } from "semantic-ui-react";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { nameof } from "./../../utils/Reflection";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";

type State = {
  email: string;
  password: string;
  formError: boolean;
};

type PropsWithRouter = Props & RouteComponentProps<{}>;

class Login extends React.Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props);
    this.state = { email: "", password: "", formError: false };
  }

  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value, formError: false });

  login = () => {
    if (this.props.mutate) {
      this.props
        .mutate({
          variables: { email: this.state.email, password: this.state.password },
          refetchQueries: [{ query: USER_QUERY }]
        })
        .then(({ data }) => {
          this.props.history.push("/");
        })
        .catch(error => {
          this.setState({ formError: true });
        });
    }
  };

  render() {
    return (
      <>
        <Form error={this.state.formError}>
          <Form.Input
            name={nameof<State>("email")}
            label="Email"
            type="input"
            placeholder="email"
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
            content="It seem's like your credentials are not correct, if you are not registered, you can register here"
          />
          <Button onClick={this.login} type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
