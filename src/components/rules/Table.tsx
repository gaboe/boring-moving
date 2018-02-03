import * as React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Rule } from "../../models/Rule";

type Props = { rules: Rule[] };

const RulesTable: React.SFC<Props> = props => (
  <Table celled={true}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Sender</Table.HeaderCell>
        <Table.HeaderCell>Subject</Table.HeaderCell>
        <Table.HeaderCell>Content</Table.HeaderCell>
        <Table.HeaderCell>Period</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.rules.map(x => {
        return (
          <Table.Row key={x.id}>
            <Table.Cell>{x.sender}</Table.Cell>
            <Table.Cell>{x.subject}</Table.Cell>
            <Table.Cell>{x.content}</Table.Cell>
            <Table.Cell>{x.period}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="4">
          <Menu floated="right" pagination={true}>
            <Menu.Item as="a" icon={true}>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon={true}>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export { RulesTable as Table };
