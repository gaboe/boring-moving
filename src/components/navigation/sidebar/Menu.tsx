import * as React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
import { MenuItems } from "./menuItems/MenuItems";
import Query, { QueryResult } from "react-apollo/Query";
import { USER_QUERY } from "../../../gql/queries/users/UserQuery";
import { UserQuery } from "../../../generated/types";
import { HasCompleteConfigDisclaimer } from "../upperbar/HasCompleteImapConfigDisclaimer";

type Props = {
  setVisibilityTrue: () => void;
  setVisibilityFalse: () => void;
  isMenuVisible: boolean;
};

const isAuthentificated = (props: QueryResult<UserQuery>) =>
  props.data !== undefined && props.data.user !== null;

const MenuComponent: React.SFC<Props> = props => {
  return (
    <Query query={USER_QUERY}>
      {(response) => {
        if (response.loading) {
          return null;
        }
        return (
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={isAuthentificated(response)}
            icon="labeled"
            vertical={true}
            inverted={true}
            onMouseEnter={props.setVisibilityTrue}
            onMouseLeave={props.setVisibilityFalse}
          >
            <MenuItems />
            <HasCompleteConfigDisclaimer />
          </Sidebar>
        )
      }}
    </Query>

  );
};

export { MenuComponent as Menu };
