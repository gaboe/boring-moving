import * as React from "react";
import { InputOnChangeData, Header, } from "semantic-ui-react";
import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { USER_QUERY } from "./../../gql/queries/users/UserQuery";
import { RouteComponentProps } from "react-router";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { CSSProperties } from "react";
import { NonAuthenificatedUser } from "../../models/User";
import { Col, Row, } from 'react-grid-system';
import { AppEmailCount } from "./AppEmailCount";
import { AuthentificateMutation, AuthentificateMutationVariables } from "../../generated/types";

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
      const variables: AuthentificateMutationVariables = { googleID, firstName, lastName, email }
      this.props
        .mutate({
          variables: variables,
          update: (proxy, data) => {
            if (data.data) {
              const user = { user: (data.data as AuthentificateMutation).authentificate };
              proxy.writeQuery({ query: USER_QUERY, data: user });
            }
            this.props.history.push("/");
          }
        })
        .catch(error => {
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
    console.log(process.env.REACT_APP_SERVER_URL);
    console.log(process.env.REACT_APP_GOOGLE_API_CLIENT_ID);
    return (
      <>
        <Row >
          <Col offset={{ xs: 1, sm: 1, md: 2, lg: 3 }} xs={10} lg={6}>
            <Header as="h1" content="Welcome to Boring Moving!" />
            <Header as="h2" content="App that automates boring email moving" />

            <Header as="h3">
              In order to connect to google API, you need to login with your
              Google account
            </Header>
            {process.env.REACT_APP_GOOGLE_API_CLIENT_ID &&
              <GoogleLogin
                className="ui linkedin button"
                clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={this.googleResponse}
                onFailure={this.googleResponse}
                style={GoogleButtonStyle}
              />}
          </Col>
        </Row >
        <AppEmailCount />
      </>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
