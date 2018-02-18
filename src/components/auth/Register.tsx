import * as React from "react";
import {
  Button,
  Form,
  InputOnChangeData,
  Message,
  Grid
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import {
  withRegisterMutation,
  Props
} from "./../../gql/mutations/users/Register";
import { nameof } from "./../../utils/Reflection";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";

type State = {
  email: string;
  password: string;
  passwordRepeat: string;
  formError: string;
};

type PropsWithRouter = Props & RouteComponentProps<{}>;

class Register extends React.Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordRepeat: "",
      formError: ""
    };
  }

  passwordsAreOk = () => this.state.password === this.state.passwordRepeat;

  handleChange = (_: {}, data: InputOnChangeData) =>
    this.setState({ [data.name]: data.value, formError: "" });

  login = () => {
    if (!this.passwordsAreOk()) {
      this.setState({
        formError: "Password and repeated password must be the same"
      });
      return;
    }
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
          this.setState({ formError: error.message });
        });
    }
  };

  render() {
    return (
      <Grid columns="12">
        <GridColumn width={4} />
        <GridColumn width={8}>
          <Form error={this.state.formError.length > 0}>
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

            <Form.Input
              name={nameof<State>("passwordRepeat")}
              label="Password again"
              type="password"
              placeholder="password again"
              onChange={this.handleChange}
            />

            <Message error={true} header="Ups" content={this.state.formError} />
            <Button color="linkedin" onClick={this.login} type="submit">
              Register
            </Button>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Form>
        </GridColumn>
        <GridColumn width={1} />
      </Grid>
    );
  }
}

const hoc = withRegisterMutation(Register);
export { hoc as Register };
