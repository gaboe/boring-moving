import * as React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Row, Col } from "react-grid-system";
import { HasCompleteConfigDisclaimer } from "./HasCompleteImapConfigDisclaimer";

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

const UpperBar: React.SFC<Props> = props => {
  return (
    <Section>
      <Row>
        <Col xs={1}>
          <Icon
            onMouseEnter={props.setVisibilityTrue}
            onMouseLeave={props.setVisibilityFalse}
            name="sidebar"
            size="big"
            loading={props.isMenuVisible}
          />
        </Col>
        <HasCompleteConfigDisclaimer />
      </Row>
    </Section>
  );
};

export { UpperBar };
