import * as React from "react";
import styled from "styled-components";
import { Icon, Header } from "semantic-ui-react";
import { Row, Col } from "react-grid-system";

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
        <Col offset={{ lg: 3, sm: 1 }} lg={6} sm={9}>
          <Header as="h4">
            It looks like your ImapConfig is not fully configured, yet.
            You can configure it here
            </Header>
        </Col>
      </Row>
    </Section>
  );
};

export { UpperBar };
