import * as React from "react";
import { ChildProps } from "react-apollo";
import { QueryResponse, withUser } from "./../../gql/queries/UserQuery";

type InputProps = {};

class Home extends React.Component<ChildProps<InputProps, QueryResponse>> {
  render() {
    const { loading, user, error } = this.props.data as QueryResponse;
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <h1>ERROR</h1>;
    }
    return <div>User is {user}</div>;
  }
}

export default withUser(Home);
