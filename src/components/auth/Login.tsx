import * as React from "react";
import { InputOnChangeData, Grid, Header } from "semantic-ui-react";

import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { CSSProperties } from "react";
import { NonAuthenificatedUser } from "../../models/User";

const mushing = require("./../../mushing.jpg");

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

  authentificate = ({
    googleID,
    firstName,
    lastName,
    email
  }: NonAuthenificatedUser): void => {
    if (this.props.mutate) {
      this.props
        .mutate({
          variables: { googleID, firstName, lastName, email },
          refetchQueries: [{ query: USER_QUERY }]
        })
        .then(({ data }) => {
          this.props.history.push("/");
        })
        .catch(error => {
          console.log("eeer", error);
          this.setState({ formError: true });
        });
    }
  };

  googleResponse = (response: GoogleLoginResponse) => {
    const profile = response.getBasicProfile();
    const user: NonAuthenificatedUser = {
      googleID: profile.getId(),
      email: profile.getEmail(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName()
    };
    this.authentificate(user);
  };

  render() {
    return (
      <Grid centered={true}>
        <Grid.Row centered={true} columns={3}>
          <GridColumn />
          <GridColumn>
            <Header as="h1" content="Welcome to Boring Moving!" />
            <Header as="h2" content="App that automates boring email moving" />
            <Header as="h3">
              In order to connect to google API, you need to login with your
              Google account
            </Header>
            <GoogleLogin
              className="ui linkedin button"
              clientId="578678813391-3khelub231ejgukuui1r4dqkg67o8p39.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
              style={GoogleButtonStyle}
            />
          </GridColumn>
          <GridColumn />
        </Grid.Row>
        <img src={mushing} />
      </Grid>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
