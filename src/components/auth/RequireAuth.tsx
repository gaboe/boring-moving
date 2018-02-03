import * as React from "react";
import { Response, withUser } from "../../gql/queries/UserQuery";
import { RouteComponentProps } from "react-router";

type PropsWithRouter = Response & RouteComponentProps<{}>;

type Component = React.SFC;

const hoc = (WrappedComponent: Component) => {
  class RequireAuth extends React.Component {
    componentWillUpdate(nextProps: PropsWithRouter) {
      if (
        nextProps &&
        nextProps.data &&
        !nextProps.loading &&
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
