import * as React from "react";
import { graphql, ChildProps } from "react-apollo";

import { mutation } from "./../../gql/mutations/users/Logout";
import { USER_QUERY } from "../../gql/queries/UserQuery";

type Props = {
  mutate: () => void;
};

class Logout extends React.Component<ChildProps<Props, {}>> {
  onClick = () => {
    this.props
      .mutate({
        refetchQueries: [{ query: USER_QUERY }]
      })
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  };

  render() {
    console.log(this.props);
    return <div onClick={this.onClick}>Click to logout </div>;
  }
}

const withLogout = graphql<Props>(mutation, {});

export default withLogout(Logout);
