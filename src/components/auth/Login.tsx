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
import { HAS_COMPLETE_IMAP_CONFIG_QUERY } from "../../gql/queries/users/HasCompleteImapConfig";

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
          },
          refetchQueries: [{ query: HAS_COMPLETE_IMAP_CONFIG_QUERY }]
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
    return (
      <>
        <Row >
          <Col offset={{ xs: 0, sm: 1, md: 1, lg: 2, xl: 3 }} xs={8} lg={6} xl={6}>
            <Header as="h1" content="Welcome to Boring Moving!" />
            <Header as="h2" content="App that automates boring email moving" />

            <Header as="h3">
              In order to connect to google API, you need to login with your
              Google account
            </Header>
            {process.env.REACT_APP_GOOGLE_API_CLIENT_ID &&
              <>
                <Row >
                  <Col
                    offset={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
                    lg={6}
                  >
                    <GoogleLogin
                      className="ui linkedin button"
                      clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={this.googleResponse}
                      onFailure={this.googleResponse}
                      style={GoogleButtonStyle}
                    />
                  </Col>
                </Row >
              </>
            }
          </Col>
        </Row >
        <AppEmailCount />
      </>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
