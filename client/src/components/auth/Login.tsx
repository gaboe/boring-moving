import * as React from "react";
import { Button, Form, InputOnChangeData } from "semantic-ui-react";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { nameof } from "./../../utils/Reflection";

type State = {
  email: string;
  password: string;
};

class Login extends React.Component<Props, State> {
  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value });

  login = () => {
    if (this.props.mutate) {
      this.props
        .mutate({
          variables: { email: this.state.email, password: this.state.password }
        })
        .then(({ data }) => {
          console.log("got data", data);
        })
        .catch(error => {
          console.log("there was an error sending the query", error);
        });
    }
  };

  render() {
    return (
      <Form>
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
        <Button onClick={this.login} type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
