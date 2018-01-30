import * as React from "react";
import {
  Button,
  Form,
  InputOnChangeData,
  Message,
  Grid
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { nameof } from "./../../utils/Reflection";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";

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
      <Grid columns="12">
        <GridColumn width={4} />
        <GridColumn width={8}>
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
              content={`It seem's like your credentials are not correct, 
                        if you are not registered, you can register here`}
            />
            <Button color="linkedin" onClick={this.login} type="submit">
              Submit
            </Button>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Form>
        </GridColumn>
        <GridColumn width={1} />
      </Grid>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
