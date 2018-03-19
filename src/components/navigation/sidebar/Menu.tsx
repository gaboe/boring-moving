import * as React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
import { MenuItems } from "./menuItems/MenuItems";

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
      <MenuItems />
    </Sidebar>
  );
};

export { MenuComponent as Menu };
