import * as React from "react";
import { withUser, Props } from "../../gql/queries/users/UserQuery";
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
      if (this.props.data && !this.props.data.loading && this.props.data.user) {
        return <WrappedComponent {...this.props} />;
      }
      return null;
    }
  }
  return withUser(RequireAuth);
};

export { hoc as RequireAuth };
