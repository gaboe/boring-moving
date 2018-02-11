import * as React from "react";
import { Form, InputOnChangeData, Grid } from "semantic-ui-react";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { CSSProperties } from "react";

const GoogleButtonStyle: CSSProperties = {};
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

  googleResponse = (response: GoogleLoginResponse) => {
    console.log(response);
  };

  render() {
    return (
      <Grid columns="12">
        <GridColumn width={4} />
        <GridColumn width={8}>
          <Form error={this.state.formError}>
            <GoogleLogin
              className="ui linkedin button"
              clientId="578678813391-3khelub231ejgukuui1r4dqkg67o8p39.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
              style={GoogleButtonStyle}
            />
          </Form>
        </GridColumn>
        <GridColumn width={1} />
      </Grid>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
