import * as React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

type Props = {};

const MenuItems: React.SFC<Props> = props => {
  return (
    <>
      <Menu.Item name="home">
        <Link to="/">
          <Icon name="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item name="gamepad">
        <Link to="/rules">
          <Icon name="gamepad" />
          Rules
        </Link>
      </Menu.Item>
      <Menu.Item name="login">
        <Link to="/login">
          <Icon name="gamepad" />
          Login
        </Link>
      </Menu.Item>
      <Menu.Item name="logout">
        <Link to="/logout">
          <Icon name="gamepad" />
          Logout
        </Link>
      </Menu.Item>
    </>
  );
};

export { MenuItems };
