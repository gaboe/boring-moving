import * as React from "react";
import { graphql, ChildProps } from "react-apollo";

import { mutation } from "./../../gql/mutations/users/Logout";

type Props = {
  mutate: () => void;
};

class Logout extends React.Component<ChildProps<Props, {}>> {
  onClick() {
    this.props
      .mutate({})
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  }

  render() {
    console.log(this.props);
    return (
      // tslint:disable-next-line:jsx-no-bind
      <div onClick={this.onClick.bind(this)}>Click to logout </div>
    );
  }
}

const withLogout = graphql(mutation, {});

export default withLogout(Logout);
