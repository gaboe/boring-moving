import * as React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContentMenuItems: React.SFC<{}> = props => {
  return (
    <>
      <Menu.Item name="home">
        <Link to="/">
          <Icon name="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item name="rules">
        <Link to="/rules">
          <Icon name="options" />
          Rules
        </Link>
      </Menu.Item>
      <Menu.Item name="imap-config">
        <Link to="/imap-config">
          <Icon name="setting" />
          Imap config
        </Link>
      </Menu.Item>
    </>
  );
};

export { ContentMenuItems };
