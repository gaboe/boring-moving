import * as React from "react";
import { InputOnChangeData, Header, Statistic, Icon } from "semantic-ui-react";
import { withLoginMutation, Props } from "./../../gql/mutations/users/Login";
import { USER_QUERY } from "./../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { CSSProperties } from "react";
import { NonAuthenificatedUser } from "../../models/User";
import { Col, Row, } from 'react-grid-system';
import { AppStatQueryComponent, APP_STAT_QUERY } from "../../gql/queries/stats/AppStatQuery";

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
      <>
        <AppStatQueryComponent query={APP_STAT_QUERY} >
          {
            response => {
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

                      <GoogleLogin
                        className="ui linkedin button"
                        clientId="578678813391-3khelub231ejgukuui1r4dqkg67o8p39.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                        style={GoogleButtonStyle}
                      />
                    </Col>
                  </Row >
                  <Row >
                    <Col offset={{ xs: 5, lg: 5 }}>
                      <Statistic size="huge">
                        <Statistic.Value>
                          <Icon name='mail' />
                          {response.data != null ? ` ${response.data.appStat.emailCount} ` : " many "}
                        </Statistic.Value>
                        <Statistic.Label>Emails moved by Boring Moving!</Statistic.Label>
                      </Statistic>
                    </Col>
                  </Row>
                </>
              )
            }
          }

        </AppStatQueryComponent >

      </>
    );
  }
}

const hoc = withLoginMutation(Login);
export { hoc as Login };
