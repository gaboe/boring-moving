import * as React from "react";
import { Sidebar, Segment } from "semantic-ui-react";
import styled from "styled-components";

// import { UpperBar } from "./../upperbar/UpperBar";
import { Menu } from "./Menu";
type Props = {
  children?: React.ReactNode;
};

type State = {
  visible: boolean;
};

const PageContent = styled.div`
  margin: 0;
`;

class SidebarLeftScaleDown extends React.Component<Props, State> {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  setVisibilityTrue = () => this.setState({ visible: true });
  setVisibilityFalse = () => this.setState({ visible: false });

  render() {
    return (
      <div>
        {/* <UpperBar
          isMenuVisible={this.state.visible}
          setVisibilityTrue={this.setVisibilityTrue}
          setVisibilityFalse={this.setVisibilityFalse}
        /> */}

        <PageContent>
          <Sidebar.Pushable as={Segment}>
            <Menu
              isMenuVisible={this.state.visible}
              setVisibilityTrue={this.setVisibilityTrue}
              setVisibilityFalse={this.setVisibilityFalse}
            />
            <Sidebar.Pusher>
              <Segment basic={true}>{this.props.children}</Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </PageContent>
      </div>
    );
  }
}

export { SidebarLeftScaleDown };
