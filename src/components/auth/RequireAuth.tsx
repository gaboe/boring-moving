import * as React from "react";
import { withUser, Props } from "../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";

type PropsWithRouter = RouteComponentProps<{}> & Props;

type Component = React.ComponentClass | React.SFC;

const hoc = (WrappedComponent: Component) => {
  class RequireAuth extends React.Component<Props> {
    componentWillUpdate(nextProps: PropsWithRouter) {
      if (
        nextProps &&
        nextProps.data &&
        !nextProps.data.loading &&
        !nextProps.data.user
      ) {
        nextProps.history.push("/login");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return withUser(RequireAuth);
};

export { hoc as RequireAuth };
