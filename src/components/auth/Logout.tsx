import * as React from "react";
import { graphql } from "react-apollo";

import { mutation, Props } from "./../../gql/mutations/users/Logout";
import { USER_QUERY } from "../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";

class Logout extends React.Component<Props & RouteComponentProps<{}>> {
  onClick = () => {
    if (this.props.mutate) {
      this.props
        .mutate({
          refetchQueries: [{ query: USER_QUERY }]
        })
        .then(() => {
          this.props.history.push("/login");
        });
    }
  };

  render() {
    return <div onClick={this.onClick}>Click to logout </div>;
  }
}

const withLogout = graphql<Props>(mutation, {});

export default withLogout(Logout);
