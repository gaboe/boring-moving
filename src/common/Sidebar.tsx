import * as React from "react";
import { Sidebar, Segment, Menu, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

type State = {
  visible: boolean;
};

const Wrapper = styled.section`
  padding-left: 1.5em;
  padding-top: 1em;
`;

class SidebarLeftScaleDown extends React.Component<Props, State> {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Wrapper>
          <Icon name="sidebar" size="big" onClick={this.toggleVisibility} />
        </Wrapper>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="scale down"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical={true}
            inverted={true}
          >
            <Menu.Item name="home">
              <Link to="/landing">
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
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic={true}>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export { SidebarLeftScaleDown };
