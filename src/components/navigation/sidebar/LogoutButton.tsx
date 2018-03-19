import * as React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

type Props = {
  onClick: () => void;
};

const LogoutButton: React.SFC<Props> = props => {
  return (
    <Menu.Item name="logout">
      <Link
        to=""
        onClick={e => {
          e.preventDefault();
          props.onClick();
        }}
      >
        <Icon name="sign out" />
        Logout
      </Link>
    </Menu.Item>
  );
};

export { LogoutButton };
