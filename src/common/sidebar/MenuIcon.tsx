import * as React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Section = styled.section`
  padding-left: 1.5em;
  padding-top: 1em;
  padding-bottom: 1em;
`;

type Props = {
  setVisibilityTrue: () => void;
  setVisibilityFalse: () => void;
  isMenuVisible: boolean;
};

const MenuIcon: React.SFC<Props> = props => {
  return (
    <Section
      onMouseEnter={props.setVisibilityTrue}
      onMouseLeave={props.setVisibilityFalse}
    >
      <Icon name="sidebar" size="big" loading={props.isMenuVisible} />
    </Section>
  );
};

export { MenuIcon };
