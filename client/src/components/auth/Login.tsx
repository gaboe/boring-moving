import * as React from "react";
import { Button, Form, InputOnChangeData } from "semantic-ui-react";
import { ChildProps } from "react-apollo";

import {
  withLoginMutation,
  InputProps,
  Response
} from "./../../gql/mutations/users/Login";
import { nameof } from "./../../utils/Reflection";
type State = {
  email: string;
  password: string;
};

class Login extends React.Component<ChildProps<InputProps, Response>, State> {
  handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    this.setState({ [data.name]: data.value });
  };

  login = () => {
    console.log(this.state);
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

    console.log(this.props);
  };

  nameof<T>(key: keyof T, instance?: T): keyof T {
    return key;
  }
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

const c = withLoginMutation(Login);
export { c as Login };
