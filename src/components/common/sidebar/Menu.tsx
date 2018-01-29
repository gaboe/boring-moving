import * as React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

type Props = {
  setVisibilityTrue: () => void;
  setVisibilityFalse: () => void;
  isMenuVisible: boolean;
};

const MenuComponent: React.SFC<Props> = props => {
  return (
    <Sidebar
      as={Menu}
      animation="scale down"
      width="thin"
      visible={props.isMenuVisible}
      icon="labeled"
      vertical={true}
      inverted={true}
      onMouseEnter={props.setVisibilityTrue}
      onMouseLeave={props.setVisibilityFalse}
    >
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
    </Sidebar>
  );
};

export { MenuComponent as Menu };
