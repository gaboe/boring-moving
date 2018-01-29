import * as React from "react";
import { Button, Form, InputOnChangeData } from "semantic-ui-react";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { nameof } from "./../../utils/Reflection";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";

type State = {
  email: string;
  password: string;
};

type PropsWithRouter = Props & RouteComponentProps<{}>;

class Login extends React.Component<PropsWithRouter, State> {
  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value });

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
          // TODO show errors
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
